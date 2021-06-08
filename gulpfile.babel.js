const gulp = require('gulp');
const sass = require('gulp-sass');
const css = require('gulp-clean-css');

function style() {
    return gulp.src('./res/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/css'));
}

function minify() {
    return gulp.src('./public/css/*.css')
        .pipe(css())
        .pipe(gulp.dest('./public/css'));
}

exports.default = gulp.series(style, minify);