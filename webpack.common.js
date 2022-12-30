const path = require('path');

module.exports = {
	entry: {
		Quiz: {
			import: path.resolve(__dirname, 'index.js'),
			dependOn: ['Console', 'Course', 'Users', 'Site']
		}
	}
}
