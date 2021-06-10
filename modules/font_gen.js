import { src, dest } from 'gulp';

import ttf2woff2 from 'gulp-ttf2woff2';
import ttf2woff from 'gulp-ttf2woff';
import ttf2eot from 'gulp-ttf2eot';
import ttf2svg from 'gulp-ttf-svg';

import { cfg } from '../configuration';

export const fontGen = () => {
    src(`${cfg.source}fonts/*.ttf`)
        .pipe(ttf2woff2())
        .pipe(dest(`${cfg.dest}fonts/`));
    src(`${cfg.source}fonts/*.ttf`)
        .pipe(ttf2woff())
        .pipe(dest(`${cfg.dest}fonts/`));
    src(`${cfg.source}fonts/*.ttf`)
        .pipe(ttf2eot())
        .pipe(dest(`${cfg.dest}fonts/`));
    src(`${cfg.source}fonts/*.ttf`)
        .pipe(ttf2svg())
        .pipe(dest(`${cfg.dest}fonts/`));
    src(`${cfg.source}fonts/*.ttf`)
        .pipe(dest(`${cfg.dest}fonts/`));
};