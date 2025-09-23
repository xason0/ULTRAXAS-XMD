import { HTMLElement } from 'node-html-parser';
export declare const genius: {
    name: string;
    parse: (html: HTMLElement) => Promise<string>;
};
