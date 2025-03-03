// function canPartition(nums) {
//     const totalSum = nums.reduce((sum, num) => sum + num, 0);
    
//     // If total sum is odd, partitioning is not possible
//     if (totalSum % 2 !== 0) return false;

//     const target = totalSum / 2;
//     const memo = new Map(); // Memoization map

//     function backtrack(index, currentSum) {
//         // If we find a subset with the required sum
//         if (currentSum === target) return true;
//         // If we go out of bounds or exceed the target sum, return false
//         if (index >= nums.length || currentSum > target) return false;

//         // Create a unique key for the memoization map
//         const key = `${index}-${currentSum}`;
//         if (memo.has(key)) return memo.get(key);

//         // Include the current number in the subset
//         const include = backtrack(index + 1, currentSum + nums[index]);
//         // Exclude the current number
//         const exclude = backtrack(index + 1, currentSum);
        
//         // Store result in memoization map
//         memo.set(key, include || exclude);
//         return memo.get(key);
//     }

//     return backtrack(0, 0);
// }


function canPartition(nums){



    let sum = nums.reduce((a,b)=> a+b, 0);


    if(sum%2!=0){
        return false;
    }
    let totalSum = sum/2


    let dp = new Array(totalSum+1).fill(false);

    dp[0] = true;

    console.log(dp)


    // nums.sort((a,b)=> a-b);

    console.log(dp)



}

// Example usage
console.log(canPartition([1, 5, 11, 5])); // Output: true
// console.log(canPartition([1, 2, 3, ÷5]));  // Output: false
// console.log(canPartition([3, 3, 3, 4, 5])); // Output: true
// console.log(canPartition([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 100])); // Output: false

// Example usage
// console.log(canPartition([1, 5, 11, 5])); // Output: true
// console.log(canPartition([1, 2, 3, 5]));  // Output: false
