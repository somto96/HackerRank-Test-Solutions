const nums = [3, 4];

const target = 6;
/**
 *  Input: nums = [2,7,11,15], target = 9
 *  Output: [0,1]
 *  Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 * MY SOLUTION (Runtime: 143ms)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums, target) => {
	const result = [];

	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			let sum = nums[i] + nums[j];
			if (sum === target) {
				result.push(i, j);
			}
		}
	}
    console.log("result", result);
	return result;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 
 
 num [2,3,4,5]
 target = 7
 ANOTHER SOLUTION (Runtime: 40ms)
 
 */
// var twoSum = function (nums, target) {
// 	var map = {};
// 	for (var i = 0; i < nums.length; i++) {
// 		var value = nums[i];
// 		var complementPair = target - value;
// 		console.log("complementPair", complementPair);
// 		if (map[complementPair] !== undefined) {
// 			console.log("test-a", [map[complementPair], i]);
// 			return [map[complementPair], i];
// 		} else {
// 			map[value] = i;
// 			console.log("map", map);
// 		}
// 	}
// };

twoSum(nums, target);
