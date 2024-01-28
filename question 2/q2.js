function missingNumber(nums) {
  const n = nums.length;
  let expected = 0;
  for (let i = 0; i <= n; i++) {
    expected ^= i;
  }
  let actual = 0;
  for (let num of nums) {
    actual ^= num;
  }
  const missingNumber = expected ^ actual;
  return missingNumber;
}
const nums1 = [3, 0, 1];
const result1 = missingNumber(nums1);
console.log(result1);

const nums2 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
const result2 = missingNumber(nums2);
console.log(result2);

const nums3 = [0, 1];
const result3 = missingNumber(nums3);
console.log(result3);
