"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lyrics = void 0;
exports.lyrics = {
    name: 'Lyrics',
    hostname: 'www.lyrics.com',
    path: '/lyric',
    parse: (html) => {
        var _a;
        const content = (_a = html
            .querySelector('pre#lyric-body-text')) === null || _a === void 0 ? void 0 : _a.textContent.replace(/(<a.*">|<\/a>)/g, '');
        return Promise.resolve(`${content}`);
    },
};
