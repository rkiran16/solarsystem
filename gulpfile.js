/**
 * Created by rkanculakunta on 8/22/16.
 */

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();



gulp.task('watch',['browserSync','build-sass'],function() {
    gulp.watch('app/css/**/*.scss',['build-sass']);
    gulp.watch('app/*.html',browserSync.reload);
});

gulp.task('browserSync',function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        }
    })

});

gulp.task('build-sass', function () {
    return gulp.src('app/css/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream:true}));

});


gulp.task('default', function () {
    console.log("Hello Gulp");
});
