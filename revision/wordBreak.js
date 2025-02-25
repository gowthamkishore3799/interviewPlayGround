var wordBreak = function(s, wordDict) {
    // Create a cache to memoize results
    let cache = new Map();

    // Helper function to check if a substring can be broken down
    var dfs = function(s) {
        // If the substring is empty, it can always be broken (base case)
        if (s === '') {
            return true;
        }

        // Check if this substring has been processed before
        if (cache.has(s)) {
            return cache.get(s);
        }

        // Try every word in the dictionary and check if it matches the beginning of the string
        for (let word of wordDict) {
            if (s.startsWith(word)) {
                let remaining = s.slice(word.length);
                if (dfs(remaining)) {
                    cache.set(s, true);
                    return true;
                }
            }
        }

        // If no valid split is found, mark the substring as false in the cache
        cache.set(s, false);
        return false;
    };

    // Start the DFS with the full string
    return dfs(s);
};

console.log(wordBreak("catsanddog", ["cats", "dog", "sand", "and", "cat"])); // true
