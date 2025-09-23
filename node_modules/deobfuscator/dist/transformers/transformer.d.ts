import Context from '../context';
export interface TransformerOptions {
}
export declare abstract class Transformer<TOptions extends TransformerOptions> {
    name: string;
    options: TOptions;
    constructor(name: string, options: Partial<TOptions>);
    protected buildOptions(options: Partial<TOptions>): TOptions;
    abstract transform(context: Context): Promise<void>;
}
//# sourceMappingURL=transformer.d.ts.map