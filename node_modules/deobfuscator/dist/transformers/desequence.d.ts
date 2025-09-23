import { Program } from '../util/types';
import { Transformer, TransformerOptions } from './transformer';
import Context from '../context';
export interface DesqeuenceOptions extends TransformerOptions {
}
export default class Desequence extends Transformer<DesqeuenceOptions> {
    constructor(options: Partial<DesqeuenceOptions>);
    desequence(ast: Program): this;
    transform(context: Context): Promise<void>;
}
//# sourceMappingURL=desequence.d.ts.map