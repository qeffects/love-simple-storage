const filename = SIMPLE_STORAGE_FILE || "simpleStorage.store";

/** @ts-ignore */
const buffer = require('string.buffer');

const isFile = love.filesystem.getInfo(filename);

let storageState: LuaTable<string, any>;

if (isFile) {
    storageState = buffer.decode(love.filesystem.read("string", filename)) as LuaTable<string, any>;
} else {
    storageState = new LuaTable<string, any>();
}

export const getField = <T extends any>(fieldName: string, defaultValue: T): T => {
    return storageState.get(fieldName) || defaultValue;
};

export const setField = <T extends any>(fieldName: string, val: T) => {
    storageState.set(fieldName, val);
    const b = buffer.encode(storageState);
    love.filesystem.write(filename, b);
};

// Returns a typed field
export const newField = <T extends any>(fieldName: string, defaultValue: T) => {
    return {
        getField: () => getField<T>(fieldName, defaultValue),
        setField: (val: T) => setField<T>(fieldName, val),
    };
};
