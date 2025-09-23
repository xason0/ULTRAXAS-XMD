import { Transformer, TransformerOptions } from './transformer';
import Context from '../context';
import { Scope } from 'eslint-scope';
import MersenneTwister from 'mersenne-twister';
declare type DefinitionType = 'CatchClause' | 'ClassName' | 'FunctionName' | 'ImplicitGlobalVariable' | 'ImportBinding' | 'Parameter' | 'TDZ' | 'Variable';
export interface RenameOptions extends TransformerOptions {
}
export default class Rename extends Transformer<RenameOptions> {
    mt: MersenneTwister;
    constructor(options: Partial<RenameOptions>);
    getVarPrefix: (type: DefinitionType) => string;
    getUpperScope: (scope: Scope) => Scope | undefined;
    scopeVisitor: (context: Context, scope: Scope) => void;
    rename(context: Context): Promise<this>;
    transform(context: Context): Promise<void>;
}
export {};
//# sourceMappingURL=rename.d.ts.map