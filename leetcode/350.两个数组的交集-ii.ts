/*
 * @lc app=leetcode.cn id=350 lang=typescript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
function intersect(nums1: number[], nums2: number[]): number[] {
  const map: Map<number, number> = new Map();
  nums1.forEach(item =>{
    let val: number | undefined = map.get(item);
    val === undefined?
      map.set(item, 1) :
      map.set(item, val + 1);
  })
  const res: number[] = [];
  nums2.forEach(item =>{
    let val: number | undefined = map.get(item);
    if(val !== undefined && val > 0){
      res.push(item);
      map.set(item, val - 1);
    }
  })
  return res;
};
// @lc code=end

