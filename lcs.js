var longestCommonSubsequence = function(text1, text2) {

    const length1 = text1.length;
    const length2 = text2.length;

    const dp = Array.from({ length: length1 + 1 }, () => Array(length2 + 1).fill(0));

    for (let i = 1; i <= length1; ++i) {
        for (let j = 1; j <= length2; ++j) {
            // Check if characters match
            if (text1[i-1] === text2[j-1]) {
                // If characters match, take diagonal value and add 1
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                // If characters do not match, take the maximum value from 
                // the left (dp[i][j-1]) or above (dp[i-1][j])
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[length1][length2];

};


console.log(longestCommonSubsequence("abcde", "ace"));