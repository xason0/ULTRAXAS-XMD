import { EventInputType } from './constants';
export declare class BinaryInfo {
    protocolVersion: number;
    sequence: number;
    events: EventInputType[];
    buffer: Buffer[];
    constructor(options?: Partial<BinaryInfo>);
}
