import { Transformer, TransformerOptions } from './transformer';
import Context from '../context';
export interface LiteralMapOptions extends TransformerOptions {
}
export default class LiteralMap extends Transformer<LiteralMapOptions> {
    constructor(options: Partial<LiteralMapOptions>);
    demap(context: Context): this;
    literals(context: Context): this;
    transform(context: Context): Promise<void>;
}
//# sourceMappingURL=literalmap.d.ts.map