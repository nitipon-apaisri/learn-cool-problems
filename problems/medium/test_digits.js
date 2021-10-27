import assert from "assert";
import { digits } from "./digits.js";

describe("digits", () => {
    it("It should return [1,2,3]", () => {
        assert.deepEqual(digits([123]), [1, 2, 3]);
    });
});
