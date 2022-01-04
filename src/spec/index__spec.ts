import * as buffer from "../buffer";

const testStr = buffer.encode({
    testStringField: 'hello world',
    testNumberField: 123,
    testArrayField: [
        "hello array"
    ],
    testTableField: {
        foo: "hello table"
    },
})

import { getField, setField } from ".."

describe("Simple storage", () => {
    // @ts-ignore
    _G['love'] = {
        filesystem: {
            read: () => (testStr),
            write: () => {},
            getInfo: () => true,
        }
    }
    it("Returns a default for an empty field correctly", () => {
        assert.is_equal(true, getField("random", true));
    })
    it("Returns a string field correctly", () => {
        assert.is_equal("hello world", getField("testStringField"));
    })
    it("Returns an array field correctly", () => {
        // @ts-ignore
        assert.are.same(["hello array"], getField("testArrayField"));
    })
    it("Returns a table field correctly", () => {
        // @ts-ignore
        assert.are.same({foo: "hello table"}, getField("testTableField"));
    })
    it("Returns a number field correctly", () => {
        assert.is_equal(123, getField("testNumberField"));
    })
    it("Sets a field correctly", () => {
        setField("testSetField", 123);
        assert.is_equal(123, getField("testSetField"));
    })
    it("Overwrites a field correctly", () => {
        assert.is_equal(123, getField("testNumberField"));
        setField("testNumberField", 321);
        assert.is_equal(321, getField("testNumberField"));
    })
})