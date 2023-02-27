/// <reference types="node" />
import { ReadBuffer } from "./read-buffer";
import { Alias } from "./types";
export declare class ReadBufferBE extends ReadBuffer {
    _u16(): number;
    _i16(): number;
    _u32(): number;
    _i32(): number;
    _u64(): bigint;
    _i64(): bigint;
    _f(): number;
    _d(): number;
    constructor(buffer: Buffer, offset: number, aliases: Alias[]);
}
//# sourceMappingURL=read-buffer-be.d.ts.map