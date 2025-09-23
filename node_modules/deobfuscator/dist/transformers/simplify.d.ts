import { BinaryOperator, Node } from '../util/types';
import { Transformer, TransformerOptions } from './transformer';
import Context from '../context';
export interface SimplifyOptions extends TransformerOptions {
}
export default class Simplify extends Transformer<SimplifyOptions> {
    constructor(options: Partial<SimplifyOptions>);
    private ALLOWED_MATH_OPERS;
    private ALLOWED_COMPARISON_OPERS;
    negativeString(context: Context): this;
    binEval(lhs: string | number, operator: BinaryOperator, rhs: string | number): boolean;
    stringConcat(context: Context): this;
    math(_node: Node): this;
    truthyFalsy(context: Context): this;
    literalComparison(_node: Node): this;
    singleToBlock(context: Context): this;
    conditionalExpression(_node: Node): this;
    logicalExpression(context: Context): this;
    fixup(context: Context): this;
    fixProxies(context: Context): this;
    transform(context: Context): Promise<void>;
}
//# sourceMappingURL=simplify.d.ts.map