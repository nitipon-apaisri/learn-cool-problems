import assert from "assert";
import { sum1toN3and5 } from "./sum1toN3and5.js";

describe("sum1ToN3and5", () => {
    it("It should return 8 when n = 5", () => {
        assert.equal(sum1toN3and5([5]), 8);
    });
});
