import { Transformer, TransformerOptions } from './transformer';
import Context from '../context';
export interface DemangleOptions extends TransformerOptions {
}
export default class Demangle extends Transformer<DemangleOptions> {
    constructor(options: Partial<DemangleOptions>);
    demangleProxies(context: Context): this;
    demangleStringFuncs(context: Context): this;
    transform(context: Context): Promise<void>;
}
//# sourceMappingURL=demangle.d.ts.map