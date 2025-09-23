"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.azlyrics = void 0;
exports.azlyrics = {
    name: 'AZLyrics',
    parse: (html) => {
        var _a;
        let possibleContent = (_a = html
            .querySelector('div.ringtone')) === null || _a === void 0 ? void 0 : _a.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
        if (html.querySelector('span.feat'))
            possibleContent = possibleContent === null || possibleContent === void 0 ? void 0 : possibleContent.nextElementSibling.nextElementSibling;
        const content = possibleContent === null || possibleContent === void 0 ? void 0 : possibleContent.textContent.trim();
        return Promise.resolve(`${content}`);
    },
};
