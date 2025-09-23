import { UnaryExpression, Literal, NumericLiteral, NumericUnaryExpression } from './types';
export declare function unaryExpressionToNumber(node: UnaryExpression, pi?: boolean): number;
export declare function literalOrUnaryExpressionToNumber(node: Literal | UnaryExpression, pi?: boolean): number;
export declare function createLiteral(value: number): NumericLiteral | NumericUnaryExpression;
//# sourceMappingURL=translator.d.ts.map