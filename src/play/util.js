define([
	'exports'
], function (exports) {
	// return query parameters
	exports.getParams = () => {
		var params = {};
		window.location.search.substr(1).split('&').forEach(item => {
			const [key, value] = item.split('=');
			params[key] = value;
		});
		return params;
	};
});
