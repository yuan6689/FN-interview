/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  let helperMap: Map<number, number> = new Map();
  let index: number | undefined;
  let res: number[] = [];
  for(let i = 0, length = nums.length; i < length; i++){
    index = helperMap.get(target - nums[i]);
    if(index !== undefined) {
      res = [i, index];
      return res;
    }
    helperMap.set(nums[i], i);
  }
  return res;
};
// @lc code=end
