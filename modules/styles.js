import { src, dest } from 'gulp';
import sass from 'gulp-sass';
import clean_css from 'gulp-clean-css';

export const styles = () => (
    src('./res/styles/app.scss')
        .pipe(sass())
        .pipe(dest('public/css'))
        .pipe(src('public/css/*.css'))
        .pipe(clean_css())
        .pipe(dest('./public/css'))
);