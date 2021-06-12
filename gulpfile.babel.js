import { watch, parallel, series } from 'gulp';

import { clean } from './modules/clean';
import { styles } from './modules/styles';
import { fonts } from './modules/font_gen';
import { templates } from "./modules/templates";

exports.dev = series(clean, parallel(styles, templates, fonts));

exports.watch = () => {
    watch(['./res/styles/*.scss', './res/styles/components/*.scss', '.res/layouts/*.scss'], styles);
    watch(['./res/views/*.html', './res/layouts/*.html', '.res/components/*.html'], templates);
    watch('./res/fonts/*.ttf', fonts);
};