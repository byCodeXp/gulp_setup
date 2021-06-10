import { watch, parallel, series } from 'gulp';

import { clean } from './modules/clean';
import { styles } from './modules/styles';
import { fonts } from './modules/font_gen';
import { blades } from './modules/blades';

exports.dev = series(clean, parallel(styles, blades, fonts));

exports.watch = () => {
    watch(['./res/style/*.scss', './res/components/*.scss', './res/components/**/*.scss'], styles);
    watch(['./res/views/*.html', './res/layouts/*.html', '.res/components/**/*.html'], blades);
    watch('./res/fonts/*.ttf', fonts);
};