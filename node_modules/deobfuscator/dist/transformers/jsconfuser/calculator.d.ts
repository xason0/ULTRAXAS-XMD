import { Transformer, TransformerOptions } from './../transformer';
import Context from '../../context';
declare type AllowedOperator = '+' | '-' | '*' | '/';
interface Operator {
    test: number;
    operator: AllowedOperator;
    lhsIndex: number;
    rhsIndex: number;
}
interface CalcFunction {
    identifier: string;
    operators: Operator[];
    operIndex: number;
}
export interface JSCCalculatorOptions extends TransformerOptions {
}
export default class JSCCalculator extends Transformer<JSCCalculatorOptions> {
    functions: CalcFunction[];
    constructor(options: Partial<JSCCalculatorOptions>);
    find(context: Context): this;
    fix(context: Context): this;
    transform(context: Context): Promise<void>;
}
export {};
//# sourceMappingURL=calculator.d.ts.map