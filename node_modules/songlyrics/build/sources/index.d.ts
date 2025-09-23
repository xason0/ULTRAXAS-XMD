import { HTMLElement } from 'node-html-parser';
declare type Source = {
    name: string;
    parse: (html: HTMLElement) => Promise<string>;
};
export declare const makeSources: () => Map<string, Source>;
export {};
