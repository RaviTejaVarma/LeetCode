// https://neetcode.io/problems/duplicate-integer/question
// Given an integer array nums, return true if any value appears more than once, else false.

export class Solution {
    hasDuplicate(nums: number[]): boolean {
        return new Set(nums).size < nums.length;
    }
}
