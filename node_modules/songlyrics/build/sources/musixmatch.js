"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.musixmatch = void 0;
exports.musixmatch = {
    name: 'Musixmatch',
    parse: (html) => {
        const content = html
            .querySelectorAll('p.mxm-lyrics__content')
            .map(x => x.textContent)
            .join('');
        return Promise.resolve(content);
    },
};
