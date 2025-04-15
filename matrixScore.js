class Solution {
    constructor() {
        this.dp = [];
    }

    dfs(idx, mask, nums1, nums2) {
        if (idx >= nums1.length) return 0;

        if (this.dp[idx][mask] !== -1) return this.dp[idx][mask];

        let ans = Infinity;
        for (let i = 0; i < nums2.length; i++) {
            let bit = (1 << i);
            if (mask & bit) continue;

            let xorSum = (nums1[idx] ^ nums2[i]) + this.dfs(idx + 1, mask | bit, nums1, nums2);
            ans = Math.min(ans, xorSum);
        }

        this.dp[idx][mask] = ans;
        return ans;
    }

    minimumXORSum(nums1, nums2) {
        const n = nums1.length;
        const m = 1 << nums2.length;
        
        console.log(m, "MMM")
        // Initialize dp array with -1
        this.dp = Array.from({ length: n + 1 }, () => Array(m).fill(-1));

        console.log(this.dp)

        return this.dfs(0, 0, nums1, nums2);
    }
}

// Example usage:
const sol = new Solution();
console.log(sol.minimumXORSum([1, 2, 4], [2, 3, 5]));  // Output: 2
