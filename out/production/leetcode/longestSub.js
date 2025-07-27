class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    
    /**
     * array doesnt work as it has negative number
     * 
     * store in hashmap
     * 
     * from i=0, go to max element.
     * if increment i = i-1+1, and find the max
     */
    longestConsecutive(nums) {

        // if(nums.length<=0){
        //     return 0
        // }
        // let occurences = new Map();
        // let subsequence = new Map();

        // for(let num of nums){
        //     occurences.set(num, true);
        // }

        // var dfs= function(num) {

        //     if(!occurences.has(num)){
        //         return 0;
        //     }

        //     if(subsequence.has(num)){
        //         return subsequence.get(num);
        //     }

        //     let val = 1 + dfs(num-1);
        //     subsequence.set(num, val);
        //     return val;
        // }

        // for(let num of nums){
        //     let val = 1 + dfs(num-1);
        //     subsequence.set(num, val);
        // }

        // let max = 0;
        // for(let occurence of subsequence.values()){
        //     if(occurence>max){
        //         max = occurence;
        //     }
        // }

        // return max;
    }
}

const sol = new Solution();
sol.longestConsecutive([2,20, 10, 2,4,6,7,9, 30]);
