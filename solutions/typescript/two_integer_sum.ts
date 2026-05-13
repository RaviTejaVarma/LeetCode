// https://neetcode.io/problems/two-integer-sum/question
// Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

export class Solution {
    twoSum(nums: number[], target: number): number[] {
        const numMap = new Map<number, number>();
        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];
            if (numMap.has(complement)) {
                return [numMap.get(complement)||0, i];
            }
            numMap.set(nums[i], i);
        }
        return [];
    }
}