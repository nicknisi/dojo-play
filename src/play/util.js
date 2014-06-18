define([
	'exports'
], function (exports) {

	// return query parameters
	exports.getParams = function () {
		var params = {};
		window.location.search.substr(1).split('&').forEach(function(item) {
			params[item.split('=')[0]] = item.split('=')[1];
		});
		return params;
	};
});
