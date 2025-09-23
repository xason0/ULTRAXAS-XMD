import { FunctionExpression, Program } from './util/types';
import { Transformer, TransformerOptions } from './transformers/transformer';
import * as eslintScope from 'eslint-scope';
export declare enum DecoderFunctionType {
    SIMPLE = 0,
    BASE64 = 1,
    RC4 = 2
}
export interface DecoderFunction {
    identifier: string;
    stringArrayIdentifier: string;
    type: DecoderFunctionType;
    offset: number;
    indexArgument: number;
    keyArgument: number;
}
export interface DecoderFunctionSimple extends DecoderFunction {
    type: DecoderFunctionType.SIMPLE;
}
export interface DecoderFunctionBase64 extends DecoderFunction {
    type: DecoderFunctionType.BASE64;
    charset: string;
}
export interface DecoderFunctionRC4 extends DecoderFunction {
    type: DecoderFunctionType.RC4;
    charset: string;
}
export interface DecoderReference {
    identifier: string;
    realIdentifier: string;
    additionalOffset: number;
    indexArgument?: number;
    keyArgument?: number;
}
interface ControlFlowFunction {
    identifier: string;
    node: FunctionExpression;
}
interface ControlFlowLiteral {
    identifier: string;
    value: string | number;
}
export interface ControlFlowStorage {
    identifier: string;
    aliases: string[];
    functions: ControlFlowFunction[];
    literals: ControlFlowLiteral[];
}
export declare enum StringArrayType {
    FUNCTION = 0,
    ARRAY = 1
}
interface StringArray {
    identifier: string;
    type: StringArrayType;
    strings: string[];
}
export default class Context {
    ast: Program;
    source?: string;
    shiftedArrays: number;
    stringArrays: StringArray[];
    stringDecoders: DecoderFunction[];
    stringDecoderReferences: DecoderReference[];
    controlFlowStorageNodes: Map<string, ControlFlowStorage>;
    removeGarbage: boolean;
    transformers: InstanceType<typeof Transformer>[];
    enableLog: boolean;
    scopeManager: eslintScope.ScopeManager;
    hash: number;
    constructor(ast: Program, transformers: [string, Partial<TransformerOptions>][], isModule: boolean, source?: string);
    log(message?: any, ...optionalParams: any[]): void;
    private buildTransformerList;
}
export {};
//# sourceMappingURL=context.d.ts.map