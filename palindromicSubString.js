
var countSubstrings = function(s) {
    let totalCount = 0;
    for (let i = 0; i < s.length; i++) {
        // Count palindromes with odd length
        totalCount += extendPalindrome(s, i, i);
        // Count palindromes with even length
        totalCount += extendPalindrome(s, i, i + 1);
    }
    return totalCount;
};

const extendPalindrome = (s, left, right) => {
    let count = 0;
    console.log(left, right<s.length)
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        count++;
        left--;
        right++;
    }
    return count;
};

console.log(countSubstrings("aaa"))


