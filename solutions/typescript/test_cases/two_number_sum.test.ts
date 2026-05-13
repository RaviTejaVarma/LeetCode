import { describe, it, expect } from "vitest";
import { Solution } from "../two_integer_sum";

const solution = new Solution();

describe("Contains Duplicate", () => {
    it("returns value of the indices [1,2]", () => {
        expect(solution.twoSum([1, 2, 3, 1],5)).toStrictEqual([1,2]);
    });

    it("returns value of indices [0,1]", () => {
        expect(solution.twoSum([3,4,5,6],7)).toStrictEqual([0,1]);
    });

    it("returns value of indices [0,2]", () => {
        expect(solution.twoSum([4,5,6],10)).toStrictEqual([0,2]);
    });

    it("returns value of indices [0,1]", () => {
        expect(solution.twoSum([5,5],10)).toStrictEqual([0,1]);
    });
});
