var characterReplacement = function(s, k) {
    let leftPointer = 0;
    let max = 0;
    let hashMap = {}
    let maxFreq = 0


    for(let rightPointer = 0; rightPointer < s.length; rightPointer++){
        hashMap[s[rightPointer]] = (hashMap[s[rightPointer]] || 0) +1;


        maxFreq = Math.max(maxFreq, hashMap[s[rightPointer]])
  
        // Move the window from the left until reaching `k` replacements
        if (hashMap[s[rightPointer]] + k < rightPointer - leftPointer + 1) {
          hashMap[s[leftPointer]]--
          leftPointer++
        }
  



        max = Math.max(max, rightPointer-leftPointer+1);
    }

    return max
};