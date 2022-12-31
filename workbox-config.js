module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{jpg,html,js,json,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};