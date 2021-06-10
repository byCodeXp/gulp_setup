import { src, dest } from 'gulp';
import template from 'gulp-html-extend';

export const blades = () => (
    src('./res/views/*.html')
        .pipe(template({annotations:false,verbose:false}))
        .pipe(dest('./public/'))
);