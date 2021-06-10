import { src, dest } from 'gulp';
import file_include from 'gulp-file-include';

export const fileInclude = () => (
    src('./res/*.html')
        .pipe(file_include({
            prefix: '@',
            basepath: '@file'
        }))
        .pipe(dest('./public/'))
);
