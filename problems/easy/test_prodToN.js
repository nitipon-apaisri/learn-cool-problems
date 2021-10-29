import assert from "assert";
import { prod1toN } from "./prod1toN.js";

describe("produce", () => {
    it("It should return 120 when n = 5", () => assert.equal(prod1toN([5]), 120));
});
