function stringMatch(str1) {
    if (str1.length < 5) return 0;
    
    const n = str1.length;
    const memo = {};
    
    function dp(i, j, len) {
        if (len === 1) return j - i + 1;
        if (len > j - i + 1) return 0;
        
        const key = `${i},${j},${len}`;
        if (memo[key] !== undefined) return memo[key];
        
        let result = 0;
        
        if (str1[i] === str1[j]) {
            if (len === 2) {
                result = 1 + (i + 1 <= j - 1 ? dp(i, j - 1, 2) : 0);
            } else {
                result = dp(i + 1, j - 1, len - 2) + dp(i, j - 1, len);
            }
        } else {
            result = dp(i + 1, j, len) + dp(i, j - 1, len) - dp(i + 1, j - 1, len);
        }
        
        return memo[key] = result;
    }
    
    return dp(0, n - 1, 5);
}