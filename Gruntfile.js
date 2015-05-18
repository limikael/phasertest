module.exports = function(grunt) {
	grunt.loadNpmTasks("grunt-browserify");

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		browserify: {
			main: {
				files: {
					"www/bundle.js": "src/game.js"
				}
			}
		},
	});
}