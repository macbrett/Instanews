var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');
var plumber = require('gulp-plumber');

gulp.task('serve', function(){
    gulp.src('./js/*.js')
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest('./build/js'))
});



gulp.task('browser-sync', function () {


    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("*.html").on("change", browserSync.reload);
});

gulp.task('gulp-plumber', function() {
    console.log('hope');
});



gulp.task('default', ['serve', 'browser-sync','gulp-plumber']); 

