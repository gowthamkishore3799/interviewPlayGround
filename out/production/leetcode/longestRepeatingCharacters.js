function lengthOfLongestSubstring(s) {
    // Your logic here

    /**
     * 
     */
    
    let i =0, j =0;
    let visitedChar = new Map();
    let longestString = Number.MIN_SAFE_INTEGER;
    
    
    while(j<s.length){
      
      let currentChar = s[j];
      
      if(visitedChar.has(currentChar) && visitedChar.get(currentChar)>=i){
        i = visitedChar.get(currentChar)+1;
      } else{
        longestString = Math.max(longestString, j-i+1);
        visitedChar.set(currentChar, j);
        j++;
      }
    }
    
    return longestString;
}


console.log(lengthOfLongestSubstring("pwwekew"))