/**
 * 
 * 
 * 
 * aba
 * 
 * 
 * a
 * 
 * 
 * for 2, character should be 2
 * 
 * for 3, any cgaracter should be 2 + 1
 * for 4, any character should be 2, 2
 * 
 * for 5 any cgarcater should be 4+ 1
 * 
 * for 6, any cgaractcer should be 2,2,2
 * 
 * 
 * abccba
 * 
 * 
 * a:2
 * b:2
 * c:2
 * d: 7
 * 
 */

var longestPalindrome = function(s) {
    const charCount = {};
   
   // Count frequency of each character in the string
   for (let char of s) {
       charCount[char] = (charCount[char] || 0) + 1;
   }
   
   let length = 0;
   let oddFound = false;

   // Loop through each character count
   for (let count of Object.values(charCount)) {
       if (count % 2 === 0) {
           // If the count is even, we can use all of these characters
           length += count;
       } else {
           // If the count is odd, use the largest even number (count - 1)
           length += count - 1;
           oddFound = true;
       }
   }

   if (oddFound) {
       length += 1;
   }

   return length;
};