import { Node } from '../util/types';
import { Transformer, TransformerOptions } from './transformer';
import Context from '../context';
export interface ControlFlowOptions extends TransformerOptions {
}
export default class ControlFlow extends Transformer<ControlFlowOptions> {
    constructor(options: Partial<ControlFlowOptions>);
    private translateCallExp;
    private getStorageNode;
    populateEmptyObjects(context: Context): this;
    findStorageNode(context: Context): this;
    findStorageNodeAliases: (context: Context, ast: Node) => this;
    replacer: (context: Context, ast: Node) => this;
    deflatten(context: Context): this;
    transform(context: Context): Promise<void>;
}
//# sourceMappingURL=controlflow.d.ts.map