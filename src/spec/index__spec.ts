/** @ts-ignore */
const buffer = require('string.buffer');

const testStr = buffer.encode({
    testStringField: 'hello world',
    testNumberField: 123,
    testTableField: [
        "hello array"
    ],
})
const love = {
    filesystem: {
        read: () => (testStr),
        write: () => {}
    }
}

import { getField, setField } from ".."

describe("Simple storage", () => {
    it("Returns a default for an empty field correctly", () => {
        assert.is_equal(true, getField("random", true));
    })
    it("Returns a string field correctly", () => {
        assert.is_equal("hello world", getField("testStringField"));
    })
    it("Returns a table field correctly", () => {
        assert.is_equal(["hello array"], getField("testTableField"));
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