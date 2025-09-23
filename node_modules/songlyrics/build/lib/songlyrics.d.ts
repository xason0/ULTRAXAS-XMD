export declare type TLyrics = {
    title: string;
    lyrics: string;
    source: {
        name: string;
        url: string;
        link: string;
    };
};
export declare const songlyrics: (title: string) => Promise<TLyrics | undefined>;
