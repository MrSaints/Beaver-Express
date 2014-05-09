'use strict';

(function ($) {
	// Debug
	var Log = function (data) {
	    console.log(data);
	}

	var Renew = function (data) {
		if (data.error) {
			// Do something
			return;
		}

		// Success
		Log("Renewed!");
	}

	$.getJSON('https://moodle.lse.ac.uk/blocks/lswt/renew.php', Renew);
}(jQuery));