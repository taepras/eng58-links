module.exports = function(grunt) {
 
    grunt.initConfig({
        watch:{
            files:["**/*.jade"],
            tasks:["jade"]
        },
        jade:{
            development:{
                files:[{
                    expand: true,
                    cwd: "jade/",
                    src: "*.jade",
                    dest: "",
                    ext: ".html"
                }],
                options:{
                    pretty: true
                }
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jade');
 
    grunt.registerTask('default', ['jade', 'watch']);
 
};