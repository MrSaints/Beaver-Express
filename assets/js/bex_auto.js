'use strict';

var Renew = function (data) {
	if (data.error) {
		return alert("We were unable to renew your loans due to an unknown error. Please try renewing your loans manually.");
	}
	for (var i = 0, length = data.items.length; i < length; i++) {
		if (!data.items[i].wasRenewed)
			return alert("We were unable to renew all your loans (there may be a request placed on one of your loans). Please try renewing your loans manually.");
	}
	console.log("All library loans were successfully renewed.")
}

var RenewLoans = function (URL, callback) {
	var request = new XMLHttpRequest();
	request.open('GET', URL, true);
	request.onload = function() {
		callback(JSON.parse(request.responseText));
	}
	request.onerror = function() {
		return alert("We were unable to renew your loans due to a network error. Please try renewing your loans manually.");
	}
	request.send();
}

chrome.storage.sync.get("autoRenew", function (data) {
	if (data.autoRenew !== true) return;
	RenewLoans('https://moodle.lse.ac.uk/blocks/lswt/renew.php', Renew);
});