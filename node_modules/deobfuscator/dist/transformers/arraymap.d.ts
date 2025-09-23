import { Transformer, TransformerOptions } from './transformer';
import Context from '../context';
export interface ArrayMapOptions extends TransformerOptions {
}
export default class ArrayMap extends Transformer<ArrayMapOptions> {
    constructor(options: Partial<ArrayMapOptions>);
    demap(context: Context): this;
    transform(context: Context): Promise<void>;
}
//# sourceMappingURL=arraymap.d.ts.map