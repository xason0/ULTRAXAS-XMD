import { TransformerOptions } from './transformers/transformer';
import { Program } from './util/types';
declare type ecmaVersion = 3 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 | 2021 | 2022 | 'latest';
declare type TransformerArray = [string, Partial<TransformerOptions>][];
export interface DeobfuscateOptions {
    /**
     * ECMA version to use when parsing AST (see acorn, default = 'latest')
     */
    ecmaVersion: ecmaVersion;
    /**
     * Replace ChainExpressions with babel-compatible Optional{X}Expessions
     * for work with Prettier
     * https://github.com/prettier/prettier/pull/12172
     * (default = true)
     *
     * @deprecated Prettier is no longer used in the deobfuscator
     */
    transformChainExpressions: boolean;
    /**
     * Custom transformers to use
     */
    customTransformers: TransformerArray;
    /**
     * Rename identifiers (default = false)
     */
    rename: boolean;
    /**
     * Acorn source type
     *
     * Both tries module first then script and uses whichever parses properly
     */
    sourceType: 'both' | 'module' | 'script';
    /**
     * Loose parsing (default = false)
     */
    loose: boolean;
}
export declare class Deobfuscator {
    defaultOptions: DeobfuscateOptions;
    private buildOptions;
    private buildAcornOptions;
    private parse;
    deobfuscateNode(node: Program, _options?: Partial<DeobfuscateOptions>): Promise<Program>;
    deobfuscateSource(source: string, _options?: Partial<DeobfuscateOptions>): Promise<string>;
}
export {};
//# sourceMappingURL=deobfuscator.d.ts.map