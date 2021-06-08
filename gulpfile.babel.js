const gulp = require('gulp');
const sass = require('gulp-sass');

function style() {
    return gulp.src('./res/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/css'));
}

function watch() {
    gulp.watch('./res/sass/*.scss', style);
}

exports.style = style;
exports.watch = watch;
