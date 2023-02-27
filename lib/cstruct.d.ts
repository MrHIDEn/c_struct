/// <reference types="node" />
import { Alias, Model, Types } from "./types";
/**
 * CStruct
 * Binary/Object and vice versa parser for JavaScript
 *
 * Parse MODEL,
 * Parse TYPES,
 * Uses Object, JSON, C_Struct lang (kind of C)
 */
export declare class CStruct<T> {
    protected _jsonModel: string;
    protected _jsonTypes: Types;
    protected _aliases: Alias[];
    constructor(model: Model, types?: Types);
    get jsonTypes(): string;
    get jsonModel(): string;
    get typesClone(): Model;
    get modelClone(): Model;
    read(buffer: Buffer, offset?: number): void;
    write(buffer: Buffer, struct: T, offset?: number): void;
    make(struct: T): void;
}
//# sourceMappingURL=cstruct.d.ts.map