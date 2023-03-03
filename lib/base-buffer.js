export class BaseBuffer {
    constructor() {
        this._atomTypes = `b8,b16,b32,b64,u8,u16,u32,u64,u8,i16,i32,i64,f,d,s,buf`.split(',');
        this._stringOrBufferAtom = /^(s|buf)[0-9]+/;
    }
    isProtectedType(type) {
        return (this._atomTypes.includes(type) ||
            this._stringOrBufferAtom.test(type));
    }
    addPredefinedAliases() {
        const aliases = [
            ['b8', 'BOOL', 'bool8'],
            ['b16', 'bool16'],
            ['b32', 'bool32'],
            ['b64', 'bool64'],
            ['u8', 'BYTE', 'uint8', 'uint8_t'],
            ['u16', 'WORD', 'uint16', 'uint16_t'],
            ['u32', 'DWORD', 'uint32', 'uint32_t'],
            ['u64', 'LWORD', 'uint64', 'uint64_t'],
            ['i8', 'SINT', 'int8', 'int8_t'],
            ['i16', 'INT', 'int16', 'int16_t'],
            ['i32', 'DINT', 'int32', 'int32_t'],
            ['i64', 'LINT', 'int64', 'int64_t'],
            ['f', 'REAL', 'float', 'float32', 'float32_t', 'single'],
            ['d', 'LREAL', 'double', 'float64', 'float64_t'],
        ];
        this.addAliases(aliases);
    }
    addAliases(aliases) {
        aliases.forEach(([type, ...aliasesList]) => aliasesList.forEach((alias) => {
            if (this.isProtectedType(alias))
                throw new Error(`Atom types are protected.`);
            const reader = this._atomFunctions.get(type);
            this._atomFunctions.set(alias, reader);
        }));
    }
}
//# sourceMappingURL=base-buffer.js.map