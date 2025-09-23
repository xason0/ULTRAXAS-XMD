import { HTMLElement } from 'node-html-parser';
export declare const azlyrics: {
    name: string;
    parse: (html: HTMLElement) => Promise<string>;
};
