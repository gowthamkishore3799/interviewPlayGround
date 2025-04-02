
var longestArithSeqLength = function(nums) {
    const n = nums.length;
    if(n<=2) return n;

    let longest = 2;
    dp = Array(n).fill().map(() => new Map()) // Array of hashmaps

    for(let i=0; i<n; ++i) {
        for(let j=0; j<i; ++j) {
            // Get diff
            const diff = nums[i] - nums[j];

            // Set subsequence length (with d = diff) = prev + 1 (set 2 in prev not exist)
            dp[i].set(diff, (dp[j].get(diff) || 1) + 1);

            // Update longest subsequence
            longest = Math.max(longest, dp[i].get(diff));
        }
    }

    return longest;
}; 


[3,6,9,12]



/**
 * one for loop for numbers
 * 
 * one for find subq element
 * 
 * 
 * diff = 4-2
 * let number= arr[j];
 * 
 * 
 * 
 * 
 * 
 * while(number+diff in hashmap){
 * counter++
 * 
 * }
 * 
 * 
 * 
 * 
 */



// jessie dugas