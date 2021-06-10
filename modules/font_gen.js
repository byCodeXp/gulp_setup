import { src, dest } from 'gulp';

import ttf2woff2 from 'gulp-ttf2woff2';
import ttf2woff from 'gulp-ttf2woff';
import ttf2eot from 'gulp-ttf2eot';
import ttf2svg from 'gulp-ttf-svg';

export const fontGen = () => {
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
};