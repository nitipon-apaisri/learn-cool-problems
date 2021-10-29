import assert from "assert";
import { sum1toN } from "./sum1toN.js";

describe("sumToN", () => {
    it("It should return 10 when n = 4", () => {
        assert.equal(sum1toN([4]), 10);
    });
});
