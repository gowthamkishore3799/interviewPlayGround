var palindromePartition = function(s, k) {
    /**
     * First split the string from o to i
     * 
     * i to j 
     * 
     * j to k
     */



    /**
     * two pointer split
     * 
     * 
     * i=0, j = 0
     * 
     * 
     * count = 
     * 
     * 
     *  j = i
     * 
     * while(j<)
     */


    /**
     * 
     * 
     * i=0, to j=0
     * 
     * 
     * j<s.length;
     * 
     * dfs
     * 
     * 
     * dfs(i, j, k)
     * 
     * 
     * dfs(0,0, 2);
     * 
     * 
     * 
     * s.splice(i, j+1) palindrome size return the no of changes, count + i=j+1, j+1;
     */

    // returns count = isPalindrome(splice(i to j)) + dfs(j+1, j+1, k-1)

    function dfs(index, k, memo) {
        // Not enough characters left to make k partitions
        if (s.length - index < k) return Infinity;

        // Base case: only one partition left — convert the rest
        if (k === 1) {
            return palindromeCount(s.slice(index));
        }

        let key =  `${index}#${k}`;

        if(key in memo) return memo[key]

        let minCount = Number.MAX_SAFE_INTEGER;

        for (let i = index; i < s.length - k + 1; i++) {
            const leftCount = palindromeCount(s.slice(index, i + 1));
            const rightCount = dfs(i + 1, k - 1, memo);

            const total = leftCount + rightCount;
            minCount = Math.min(minCount, total);

            

        }
        memo[key] = minCount;

        return minCount;
    }
    return dfs(0, k, {})
};


function palindromeCount(str) {
    let l = 0, r = str.length - 1;
    let count = 0;
    while (l < r) {
        if (str[l] !== str[r]) count++;
        l++;
        r--;
    }
    return count;
}


console.log(palindromePartition("tcymekt", 4))









// abba


// 0, 1