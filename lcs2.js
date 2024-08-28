var longestCommonSubsequence = function(text1, text2) {
    const cache = {}; // Create a cache for memoization

    var recursion = function(i, j) {
        // If we've reached the end of either string, return 0
        if (i >= text1.length || j >= text2.length) {
            return 0;
        }

        // Check if the result is already in the cache
        if (`${i},${j}` in cache) {
            return cache[`${i},${j}`];
        }

        let sum;

        // If characters match, move both pointers forward
        if (text1[i] === text2[j]) {
            sum = 1 + recursion(i + 1, j + 1);
        } else {
            // Otherwise, try both possibilities (move one pointer at a time) and take the max
            sum = Math.max(recursion(i + 1, j), recursion(i, j + 1));
        }

        // Store the result in the cache
        cache[`${i},${j}`] = sum;
        return sum;
    }

    return recursion(0, 0);
};
