import { BinaryExpression } from '../util/types';
import { Transformer, TransformerOptions } from './transformer';
import Context from '../context';
export interface StringDecoderOptions extends TransformerOptions {
}
export default class StringDecoder extends Transformer<StringDecoderOptions> {
    constructor(options: Partial<StringDecoderOptions>);
    private literals_to_arg_array;
    private util_b64_decode;
    private util_rc4_decode;
    private util_decode;
    getString: (context: Context, decoderIdentifier: string, index: number, offset: number) => string;
    decodeSimple(context: Context, identifier: string, index: number, offset: number): string;
    decodeBase64(context: Context, identifier: string, // grab the charset from our identifier
    index: number, offset: number): string;
    decodeRC4(context: Context, identifier: string, index: number, key: string, offset: number): string;
    stringsFinder(context: Context): this;
    funcFinder(context: Context): this;
    calcShift: (context: Context, breakCond: number, stringArrayIdent: string, parseIntChain: BinaryExpression) => void;
    shiftFinder(context: Context): this;
    shiftFinder2(context: Context): this;
    varReferenceFinder(context: Context): number;
    fnReferenceFinder(context: Context): number;
    decoder(context: Context): this;
    transform(context: Context): Promise<void>;
}
//# sourceMappingURL=stringdecoder.d.ts.map