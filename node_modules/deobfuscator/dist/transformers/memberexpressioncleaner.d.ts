import { Program } from '../util/types';
import { Transformer, TransformerOptions } from './transformer';
import Context from '../context';
export interface MemberExpressionCleanerOptions extends TransformerOptions {
}
export default class MemberExpressionCleaner extends Transformer<MemberExpressionCleanerOptions> {
    constructor(options: Partial<MemberExpressionCleanerOptions>);
    clean(ast: Program): this;
    transform(context: Context): Promise<void>;
}
//# sourceMappingURL=memberexpressioncleaner.d.ts.map