import { proto } from '../../WAProto';
import { KeyPair } from '../Types';
import { BinaryNode } from '../WABinary';
import { ILogger } from './logger';
export declare const makeNoiseHandler: ({ keyPair: { private: privateKey, public: publicKey }, NOISE_HEADER, logger, routingInfo }: {
    keyPair: KeyPair;
    NOISE_HEADER: Uint8Array;
    logger: ILogger;
    routingInfo?: Buffer | undefined;
}) => {
    encrypt: (plaintext: Uint8Array) => Buffer<ArrayBuffer>;
    decrypt: (ciphertext: Uint8Array) => Buffer<ArrayBuffer>;
    authenticate: (data: Uint8Array) => void;
    mixIntoKey: (data: Uint8Array) => Promise<void>;
    finishInit: () => Promise<void>;
    processHandshake: ({ serverHello }: proto.HandshakeMessage, noiseKey: KeyPair) => Promise<Buffer<ArrayBuffer>>;
    encodeFrame: (data: Buffer | Uint8Array) => Buffer<ArrayBuffer>;
    decodeFrame: (newData: Buffer | Uint8Array, onFrame: (buff: Uint8Array | BinaryNode) => void) => Promise<void>;
};
