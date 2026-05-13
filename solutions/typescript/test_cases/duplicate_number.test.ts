import { describe, it, expect } from "vitest";
import { Solution } from "../duplicate_number";

const solution = new Solution();

describe("Contains Duplicate", () => {
    it("returns true when a duplicate exists", () => {
        expect(solution.hasDuplicate([1, 2, 3, 1])).toBe(true);
    });

    it("returns false when all elements are unique", () => {
        expect(solution.hasDuplicate([1, 2, 3, 4])).toBe(false);
    });

    it("returns true for an array where all elements are the same", () => {
        expect(solution.hasDuplicate([5, 5, 5])).toBe(true);
    });

    it("returns false for a single element array", () => {
        expect(solution.hasDuplicate([1])).toBe(false);
    });

    it("returns true when duplicate is at the end", () => {
        expect(solution.hasDuplicate([1, 2, 3, 4, 5, 1])).toBe(true);
    });
});
