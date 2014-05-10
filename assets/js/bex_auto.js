'use strict';

var Renew = function (data) {
	if (data.error) {
		return alert("We were unable to renew your loans due to a network error. Please try renewing your loans manually.");
	}
	for (var i = 0, length = data.items.length; i < length; i++) {
		if (!data.items[i].wasRenewed)
			return alert("We were unable to renew all your loans (there may be a request placed on one of your loans). Please try renewing your loans manually.");
	}
	console.log("All library loans were successfully renewed.")
}

chrome.storage.sync.get("autoRenew", function (data) {
	if (data.autoRenew !== true) return;
	$.getJSON('https://moodle.lse.ac.uk/blocks/lswt/renew.php', Renew);
});