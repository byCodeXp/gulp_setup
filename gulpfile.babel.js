import { watch, parallel, series } from 'gulp';

import { clean } from './modules/clean';
import { styles } from './modules/styles';
import { fonts } from './modules/font_gen';
import { templates } from "./modules/templates";
import { pictures } from "./modules/pictures";

import { config } from './configuration';

exports.dev = series(clean, parallel(styles, templates, fonts, pictures));

exports.watching = () => {
    watch([`${config.source}styles/*.scss`, `${config.source}styles/components/*.scss`, `${config.source}styles/layouts/*.scss`], styles);
    watch([`${config.source}views/*.html`, `${config.source}views/layouts/*.html`, `${config.source}views/components/*.html`], templates);
    watch(`${config.source}fonts/*.ttf`, fonts);
};