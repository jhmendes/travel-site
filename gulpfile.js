var gulp = require('gulp'), 
 watch = require('gulp-watch'), 
 postcss = require('gulp-postcss'), 
 autoprefixer = require('autoprefixer'), 
 cssvars = require('postcss-simple-vars'), 
 nested = require('postcss-nested'), 
 cssImport = require('postcss-import'), 
 browserSync = require('browser-sync').create();

gulp.task('default', function(){
    console.log('Yo this is a gulp task.');
});

gulp.task('html', function(){
    console.log('this is some html text');
});

gulp.task('styles', function(){
   return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssImport, nested, cssvars, autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'));
});

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

        
});

gulp.task('cssInject', ['styles'], function() {
    return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});

//Browsersync steps:

/**
 * Watch is running, browserSync spins up a local web server pointed at the app directory
 * When any css file is saved, the cssInject begins but cannot complete until the styles task is run 
 * The Styles task does all the post CSS magic, then pipes it to the final output css file
 * Then the cssInject task runs, grabs that final css file, sends it to browserSync to finally display in the browser
 * 
 * 
 */