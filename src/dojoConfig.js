/*exported dojoConfig*/
var dojoConfig = {
	async: true,
	isDebug: true,
	tlmSiblingOfDojo: false,
	baseUrl: 'src',
	packages: [
		{ name: 'dojo', location: 'bower_components/dojo' },
		{ name: 'dijit', location: 'bower_components/dijit' },
		{ name: 'dojox', location: 'bower_components/dojox' },
		{ name: 'put-selector', location: 'bower_components/put-selector' },
		{ name: 'xstyle', location: 'bower_components/xstyle' },
		{ name: 'dgrid', location: 'bower_components/dgrid' },
		{ name: 'dojo-smore', location: 'bower_components/dojo-smore' },
		'play',
		'playground'
	]
};
