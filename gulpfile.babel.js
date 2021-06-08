const gulp = require('gulp');
const g_sass = require('gulp-sass');
const g_css = require('gulp-clean-css');

function sass() {
    return gulp.src('./res/sass/*.scss')
        .pipe(g_sass())
        .pipe(gulp.dest('./public/css'));
}

function css() {
    return gulp.src('./public/css/*.css')
        .pipe(g_css())
        .pipe(gulp.dest('./public/css'));
}

function watch() {
    gulp.watch('./res/sass/*.scss', sass);
    gulp.watch('./public/css/*.css', css);
}

exports.dev = gulp.series(sass, css);
exports.watch = watch;