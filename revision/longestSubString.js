function longestPalindrome(s) {
    let processedString = "^#" + s.split("").join("#") + "#$";

    let palindrome = new Array(processedString.length).fill(0);

    let c = 0;
    let r = 0;
    let maxLen = Number.MIN_SAFE_INTEGER;
    let currentIndex = 0;

    // ^#b#a#b#a#d#$
    for(let i=0; i< processedString.length; i++){
        let mirror = 2 * c - i


        if(i<r){
            palindrome[i] = Math.min(palindrome[mirror],  palindrome[i]);
        }
    



        while(i + palindrome[i]+ 1 < processedString.length && i - palindrome[i]-1 >=0 && processedString[i+ palindrome[i] + 1]  == processedString[i-palindrome[i]-1]){
            palindrome[i] ++;
        }


        if(palindrome[i] > maxLen){
            maxLen = palindrome[i];
            currentIndex = i;
        }


        if(
            i+ palindrome[i] > r
        ){
            c = i;
            r = i+palindrome[i]
        }
 
    }


    let stringIndex = Math.floor(Math.abs(currentIndex-maxLen)/2)

    return s.substring(stringIndex, stringIndex+maxLen)



};

console.log(longestPalindrome("bab"))
