var gulp = require('gulp'), 
 watch = require('gulp-watch');

gulp.task('default', function(){
    console.log('Yo this is a gulp task.');
});

gulp.task('html', function(){
    console.log('this is some html text');
});

gulp.task('styles', function(){
    console.log('SASS TASKS RUNNINGGGG');
});

gulp.task('watch', function() {
        watch('./app/index.html', function(){
            gulp.start('html');
        });

        watch('./app/assets/styles/**/*.css', function() {
            gulp.start('styles');
        });
});