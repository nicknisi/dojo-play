require([
	'dojo/_base/array',
	'dojo/Deferred',
	'play/util',
	'put-selector/put',
	'dojo/domReady!'
], function (array, Deferred, util, put) {
	var params = util.getParams(),
		dfd = new Deferred(),
		promise = dfd.promise,
		deps = params.deps ? array.map(params.deps.split(','), function (dep) { return 'playground/' + dep; }) : [],
		css = params.css ? array.map(params.css.split(','), function (style) {
			return 'src/resources/' + style;
		}) : [],
		template = params.template ? 'playground/templates/' + params.template
			: deps.length ? 'playground/templates/default.html' : 'play/templates/default.html';

	function loadStyles(url) {
		put(document.querySelector('head'), 'link[rel="stylesheet"][href="' + url + '"]');
	}

	array.forEach(css, loadStyles);

	require([
		'dojo/dom-construct',
		'dojo/text!' + template
	], function (domConstruct, templateString) {
		var node = domConstruct.toDom(templateString);
		document.getElementById('play-main').appendChild(node);
		dfd.resolve();
	});

	if (params.deps) {
		promise.then(function () {
			require(deps);
		});
	}
});
