const { src, dest, watch, parallel, series } = require('gulp'),
    sass = require('gulp-sass'),
    clean_css = require('gulp-clean-css'),
    file_include = require('gulp-file-include');

function toCss() {
    return src('./res/style/*.scss')
        .pipe(sass())
        .pipe(dest('./public/css'));
}

function minifyCss() {
    return src('./public/css/*.css')
        .pipe(clean_css())
        .pipe(dest('./public/css'));
}

function includeHtml() {
    return src('./res/*.html')
        .pipe(file_include({
            prefix: '@',
            basepath: '@file'
        }))
        .pipe(dest('./public/'));
}

function watching() {
    watch('./res/style/*.scss', toCss);
    watch('./public/css/*.css', minifyCss);
    watch('./res/*.html', includeHtml);
}

exports.dev = parallel(series(toCss, minifyCss), includeHtml);
exports.watch = watching;