var gulp = require('gulp'), 
 watch = require('gulp-watch'),
 browserSync = require('browser-sync').create();

gulp.task('watch', function() {

    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    }); 

    watch('./app/index.html', function(){
        browserSync.reload();
    });

    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('cssInject');

    });

    watch('./app/assets/scripts/**/*.js', function() {
        gulp.start('scriptsRefresh');
    });

    
});


gulp.task('cssInject', ['styles'], function() {
    return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function() {
    browserSync.reload();
})
//Browsersync steps:

/**
 * Watch is running, browserSync spins up a local web server pointed at the app directory
 * When any css file is saved, the cssInject begins but cannot complete until the styles task is run 
 * The Styles task does all the post CSS magic, then pipes it to the final output css file
 * Then the cssInject task runs, grabs that final css file, sends it to browserSync to finally display in the browser
 */