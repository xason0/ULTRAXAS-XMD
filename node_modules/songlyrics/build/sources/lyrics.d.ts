import { HTMLElement } from 'node-html-parser';
export declare const lyrics: {
    name: string;
    hostname: string;
    path: string;
    parse: (html: HTMLElement) => Promise<string>;
};
