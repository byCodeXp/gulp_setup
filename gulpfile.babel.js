import { watch, parallel, series } from 'gulp';

import { clean } from './modules/clean';
import { styles } from './modules/styles';
import { fileInclude } from './modules/file_include';
import { fontGen } from './modules/font_gen';

// function watching(done) {
//     watch(['./res/style/*.scss', './res/components/*.scss', './res/components/**/*.scss'], style);
//     watch('./res/*.html', includeHtml);
//     watch('./res/fonts/*.ttf', fontFaceGen);
//     done();
// }

export const dev = series(clean, styles, fileInclude, fontGen);

// exports.watch = watching;