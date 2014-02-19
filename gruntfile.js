
// Grunt rocks
// author: griffin byron @ puginabox.com

module.exports = function(grunt) {

// this saves us loading up every installed package plugin
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  grunt.initConfig({
//--------------------------------------------------|   uglify target    
    uglify: {
      my_target: {
        files: {
          'js/behavior.js': ['dev/js/*.js']
        } //files
      } //my_target
    }, //uglify
//--------------------------------------------------|   compass target
    compass: {
      dev: {
        options: {
          config: 'config.rb' // css minifying done in here
        } //options
      } //dev
    }, //compass
//--------------------------------------------------|   pre-process Sass to CSS
    sass: {
      files: ['dev/sass/*.scss'],
      tasks: ['compass:dev']
    }, //sass
//--------------------------------------------------|   html hinting; great for missing tag pairs on deadlines!
    htmlhint: {
        build: {
            options: {
                'tag-pair': true,
                'tagname-lowercase': true,
                'attr-lowercase': true,
                'attr-value-double-quotes': true,
                'doctype-first': true,
                'spec-char-escape': true,
                'id-unique': true,
                'head-script-disabled': true,
                'style-disabled': true
            },
            src: ['index.html']
        }
    },
//--------------------------------------------------|   Watching everything
    watch: {
      options: { livereload: true },
      html: {
          files: ['index.html'],
          tasks: ['htmlhint']
      },
      scripts: {
          files: ['dev/js/*.js'],
          tasks: ['uglify']
      }, //scripts end
      sass: { 
          files: ['components/sass/*.scss'], //sass preprocessing; minifying done in config.rb file
          tasks: ['compass:dev']
      }, //sass end
      html: {
          files: ['../*.html']
      }      
    } //watch end
  }) //initConfig end


//--------------------------------------------------|   watch for changes
  grunt.registerTask('default', 'watch');
} //exports end





