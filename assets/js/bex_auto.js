'use strict';

(function ($) {
	var Renew = function (data) {
		if (data.error) {
			// Do something
			return;
		}

		// Success
		console.log("Renewed!");
	}

	chrome.storage.sync.get("autoRenew", function (data) {
		if (data.autoRenew === true)
			$.getJSON('https://moodle.lse.ac.uk/blocks/lswt/renew.php', Renew);
		else
			console.log("Disabled");
	});
}(jQuery));