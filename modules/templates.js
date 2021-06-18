import template from '@bycodexp/template-views';

import { config } from '../configuration';

export const templates = () => {
    return template(`${config.source}views/`, config.dest);
}
