define([
	'exports',
	'dojo/_base/array'
], function (exports, array) {

	// return query parameters
	exports.getParams = function () {
		var params = {};
		array.forEach(window.location.search.substr(1).split('&'), function(item) {
			params[item.split('=')[0]] = item.split('=')[1];
		});
		return params;
	};
});
