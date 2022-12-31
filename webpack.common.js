const path = require('path');

module.exports = {
	entry: {
		Quiz: {
			import: path.resolve(__dirname, 'index.js'),
			dependOn: ['Course', 'Users', 'Site']
		},
		QuizConsole: {
			import: path.resolve(__dirname, 'js/Console/index.js'),
			dependOn: ['Console', 'Course', 'Users', 'Site']
		}
	}
}
