/*exported dojoConfig*/
var dojoConfig = {
	async: true,
	isDebug: true,
	tlmSiblingOfDojo: false,
	baseUrl: '.',
	packages: [
		{ name: 'dojo', location: 'dojo' },
		{ name: 'dijit', location: 'dijit' },
		{ name: 'dojox', location: 'dojox' },
		{ name: 'put-selector', location: 'put-selector' },
		{ name: 'xstyle', location: 'xstyle' },
		{ name: 'dgrid', location: 'dgrid' },
		{ name: 'dstore', location: 'dstore' },
		{ name: 'dmodel', location: 'dmodel' },
		{ name: 'dojo-smore', location: 'dojo-smore' },
		{ name: 'play', location: 'src/play' },
		{ name:'playground', location: 'src/playground' }
	]
};
