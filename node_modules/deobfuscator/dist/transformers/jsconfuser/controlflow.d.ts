import { Transformer, TransformerOptions } from './../transformer';
import Context from '../../context';
export interface JSCControlFlowOptions extends TransformerOptions {
}
export default class JSCControlFlow extends Transformer<JSCControlFlowOptions> {
    constructor(options: Partial<JSCControlFlowOptions>);
    deflatten(context: Context): this;
    fixSwitch(context: Context): this;
    transform(context: Context): Promise<void>;
}
//# sourceMappingURL=controlflow.d.ts.map