"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSources = void 0;
const azlyrics_1 = require("./azlyrics");
const genius_1 = require("./genius");
const lyrics_1 = require("./lyrics");
const musixmatch_1 = require("./musixmatch");
const makeSources = () => {
    const sources = new Map();
    sources.set('genius', genius_1.genius);
    sources.set('azlyrics', azlyrics_1.azlyrics);
    sources.set('musixmatch', musixmatch_1.musixmatch);
    sources.set('lyrics', lyrics_1.lyrics);
    return sources;
};
exports.makeSources = makeSources;
