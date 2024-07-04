var longestPalindrome = function(s) {

    let maxLen = 0;
    let subStringIndex=0;

    var findLongestPalindrome = function(left, right) {
        let index = left;


        while(left>=0 && right<s.length && s[left] == s[right]){
            let len = right-left+1;


            if(len>maxLen){
                maxLen = len;
                subStringIndex = left;
            }
            left--
            right++;
        }
    }

    for(let i=0; i< s.length; i++){
        findLongestPalindrome(i, i);
        findLongestPalindrome(i, i+1)
    }
    console.log(subStringIndex, subStringIndex+maxLen)
    return s.substring(subStringIndex, subStringIndex+maxLen)
};





console.log(longestPalindrome("a"))


