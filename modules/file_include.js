import { src, dest } from 'gulp';
import file_include from 'gulp-file-include';
import { cfg } from '../configuration';

export const fileInclude = () => (
    src(`${cfg.source}*.html`)
        .pipe(file_include({
            prefix: '@',
            basepath: '@file'
        }))
        .pipe(dest(cfg.dest))
);
