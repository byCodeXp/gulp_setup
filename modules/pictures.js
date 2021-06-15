import { config } from '../configuration';
import { src, dest } from 'gulp';
import image from 'gulp-image';

export const pictures = () => {
    src(`${config.source}img/*`)
        .pipe(image({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            mozjpeg: true,
            gifsicle: true,
            svgo: true,
            concurrent: 10,
            quiet: true // defaults to false
        }))
        .pipe(dest(`${config.dest}img/`));
};