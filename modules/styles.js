import { src, dest } from 'gulp';
import sass from 'gulp-sass';
import clean_css from 'gulp-clean-css';
import { cfg } from '../configuration';

export const styles = () => (
    src(`${cfg.source}style/*.scss`)
        .pipe(sass())
        .pipe(dest(`${cfg.dest}css`))
        .pipe(src(`${cfg.dest}css/*.css`))
        .pipe(clean_css())
        .pipe(dest(`${cfg.dest}css`))
);