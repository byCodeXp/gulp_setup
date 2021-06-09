const { src, dest, watch, parallel, series } = require('gulp'),
    sass = require('gulp-sass'),
    clean_css = require('gulp-clean-css'),
    file_include = require('gulp-file-include'),
    ttf2woff2 = require('gulp-ttf2woff2'),
    ttf2woff = require('gulp-ttf2woff'),
    ttf2eot = require('gulp-ttf2eot'),
    ttf2svg = require('gulp-ttf-svg');

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

function fontfacegen() {
    src('./res/fonts/*.ttf')
        .pipe(ttf2woff2())
        .pipe(dest('./public/fonts/'));
    src('./res/fonts/*.ttf')
        .pipe(ttf2woff())
        .pipe(dest('./public/fonts/'));
    src('./res/fonts/*.ttf')
        .pipe(ttf2eot())
        .pipe(dest('./public/fonts/'));
    src('./res/fonts/*.ttf')
        .pipe(ttf2svg())
        .pipe(dest('./public/fonts/'));
    src('./res/fonts/*.ttf')
        .pipe(dest('./public/fonts/'));
}

function watching(done) {
    watch(['./res/style/*.scss', './res/components/*.scss', './res/components/**/*.scss'], toCss);
    watch('./public/css/*.css', minifyCss);
    watch('./res/*.html', includeHtml);
    watch('./res/fonts/*.ttf', fontfacegen);
    done();
}

exports.font = fontfacegen;
exports.dev = parallel(series(toCss, minifyCss), includeHtml, fontfacegen);
exports.watch = watching;