import { src, dest } from 'gulp';

import ttf2woff2 from 'gulp-ttf2woff2';
import ttf2woff from 'gulp-ttf2woff';
import ttf2eot from 'gulp-ttf2eot';
import ttf2svg from 'gulp-ttf-svg';

import { config } from '../configuration';

export const fonts = () => {
    src(`${config.source}fonts/*.ttf`)
        .pipe(ttf2woff2())
        .pipe(dest(`${config.dest}fonts/`));
    src(`${config.source}fonts/*.ttf`)
        .pipe(ttf2woff())
        .pipe(dest(`${config.dest}fonts/`));
    src(`${config.source}fonts/*.ttf`)
        .pipe(ttf2eot())
        .pipe(dest(`${config.dest}fonts/`));
    src(`${config.source}fonts/*.ttf`)
        .pipe(ttf2svg())
        .pipe(dest(`${config.dest}fonts/`));
    src(`${config.source}fonts/*.ttf`)
        .pipe(dest(`${config.dest}fonts/`));
};