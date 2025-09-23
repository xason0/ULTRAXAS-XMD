import { HTMLElement } from 'node-html-parser';
export declare const musixmatch: {
    name: string;
    parse: (html: HTMLElement) => Promise<string>;
};
