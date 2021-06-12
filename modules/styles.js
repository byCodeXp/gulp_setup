import { src, dest } from 'gulp';
import sass from 'gulp-sass';
import clean_css from 'gulp-clean-css';

import { config } from '../configuration';

export const styles = () => (
    src(`${config.source}styles/app.scss`)
        .pipe(sass())
        .pipe(dest(`${config.dest}css`))
        .pipe(src(`${config.dest}css/*.css`))
        .pipe(clean_css())
        .pipe(dest(`${config.dest}css`))
);