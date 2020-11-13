/* Given an array of integers nums and an integer target, return indices of the two numbers 
such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1]. */

const twoNumbers = (nums, target) => {
    arrOut = [];
    for (let i = 0; i < nums.length-1; i++) {
        {
            
            let index = nums.findIndex((z) => z!==i && nums[z] === target - nums[i])
            nums.shift();
            console.log(nums, i, index);
            if (index !== -1) {
                arrOut.push(i, index);

            }

        }
    }
    console.log(arrOut);
};
twoNumbers([2,7,11,15], 9)