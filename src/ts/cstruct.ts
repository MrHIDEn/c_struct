import { Model, Types } from "./types";
import { ModelParser } from "./model-parser";


export class CStruct<T> {
    protected _jsonModel: string;
    protected _jsonTypes: Types;

    constructor(model: Model, types?: Types) {
        this._jsonTypes = types;
        this._jsonModel = ModelParser.parseModel(model, types);
    }

    get jsonTypes(): string {
        return this._jsonTypes ? ModelParser.parseModel(this._jsonTypes) : undefined;
    }

    get jsonModel(): string {
        return this._jsonModel;
    }

    get modelClone(): Model {
        return JSON.parse(this._jsonModel) as Model;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    read(buffer: Buffer, offset = 0) {
        throw Error("This is abstract class");
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    write(buffer: Buffer, struct: T, offset = 0) {
        throw Error("This is abstract class");
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    make(struct: T) {
        throw Error("This is abstract class");
    }
}