import del from 'del';
import { cfg } from '../configuration';

export const clean = () => (
    del(cfg.dest)
);
