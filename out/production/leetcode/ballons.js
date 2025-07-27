class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    maxCoins(nums) {

        let cache = new Map();

        function dfs(nums){
            const key = nums.join("#");

            if (cache.has(key)) {
                return cache.get(key);
            }

            if(nums.length == 0){
                return 0
            }
            let max = Number.MIN_SAFE_INTEGER;
            for(let i=0; i<nums.length; i++){
                let newArray = [...nums.slice(0,i), ...nums.slice(i+1)]
                let sum = (nums[i-1] || 1) * nums[i] * (nums[i+1] || 1) + dfs(newArray);
                max = Math.max(sum, max);
            }
            cache.set(key, max)

            return max;
        }

        return dfs(nums);
    }
}


const sol = new Solution();
console.log(sol.maxCoins([4,2,3,7]
))