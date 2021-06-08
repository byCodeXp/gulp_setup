import gulp from 'gulp';
import sass from 'gulp-sass';

function style() {
    return gulp.src('./res/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/css'));
}

exports.style = style;