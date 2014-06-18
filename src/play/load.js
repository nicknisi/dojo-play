require([
	'dojo/_base/array',
	'dojo/Deferred',
	'play/util',
	'dojo/domReady!'
], function (array, Deferred, util) {
	var params = util.getParams(),
		dfd = new Deferred(),
		promise = dfd.promise,
		template = params.template ? params.template : 'default.html';

	require([
		'dojo/dom-construct',
		'dojo/text!playground/templates/' + template
	], function (domConstruct, templateString) {
		console.info('loading template: playground/templates/' + template);
		var node = domConstruct.toDom(templateString);
		document.getElementById('main').appendChild(node);
		dfd.resolve();
	});

	if (params.deps) {
		promise.then(function () {
			var deps = array.map(params.deps.split(','), function (dep) {
				console.info('loading source: playground/' + dep);
				return 'playground/' + dep;
			});
			require(deps);
		});
	}
});
