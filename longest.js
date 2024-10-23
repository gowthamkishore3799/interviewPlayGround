var lengthOfLongestSubstring = function(s) {


    if(s.length == 1){
        return 1;
    }
    const hashMap = new Map();
    let left = 0;
    let max = 0;

    for(let i =0; i< s.length; i++){
        if(hashMap.has(s[i]) && hashMap.get(s[i]) >= left) {
            left = hashMap.get(s[i])+1;
        }
        hashMap.set(s[i], i);
        max = Math.max(max, (i-left)+1)
    }
    return max;
    
};