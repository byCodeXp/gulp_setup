import del from 'del';
import { config } from '../configuration';

export const clean = () => (
    del(config.dest)
);