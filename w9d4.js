/*
nums = [1,2,3,4,6,7,8,10]
Output: [
{i: 4, n:6},
{i: 7, n:10}
]
*/

function allNonConsecutive(nums) {
    let answer = [];

    // IF empty array
    if (nums.length === 0) {
        return answer;
    }
    
    for (let i = 0; i < nums.length; i++) {
        // if NON consecutive
        //  (current val - 1 != val of index to the left) OR index is NOT 0
        if (nums[i] - 1 != nums[i - 1] && i !== 0) {
            answer.push({ i, n: nums[i] });
        }
        // else skip
    }
    return answer;
}

nums = [1, 2, 3, 4, 6, 7, 8, 10]
console.log(allNonConsecutive(nums))

