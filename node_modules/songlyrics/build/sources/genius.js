"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genius = void 0;
exports.genius = {
    name: 'Genius',
    parse: (html) => {
        const content = html
            .querySelectorAll('div[data-lyrics-container=true]')
            .map(x => x.structuredText)
            .join('')
            .replace(/\[.+\]/g, '')
            .trim();
        return Promise.resolve(content);
    },
};
