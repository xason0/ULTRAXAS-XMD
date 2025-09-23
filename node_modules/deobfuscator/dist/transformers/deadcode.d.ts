import { Transformer, TransformerOptions } from './transformer';
import Context from '../context';
export interface DeadCodeOptions extends TransformerOptions {
}
export default class DeadCode extends Transformer<DeadCodeOptions> {
    constructor(options: Partial<DeadCodeOptions>);
    flipIfStatements(context: Context): this;
    removeDeadAlternates(context: Context): this;
    fixIfStatements(context: Context): this;
    removeDead(context: Context): this;
    removeDeadVariables(context: Context): this;
    transform(context: Context): Promise<void>;
}
//# sourceMappingURL=deadcode.d.ts.map