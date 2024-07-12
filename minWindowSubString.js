
/**
 * 
 * @param {*} s main string
 * @param {*} t substring
 * 
 * 
 * case i: 
 * 
 *    if t is more than s, return "";
 * case ii: 
 * 
 *    if trim = empty , return ""
 * 
 * case iii:
 * 
 *   create a hashmap of t,  { "A", "B", "C"} : 0, 0, 1
 *   also a bucket of characters,  bucket ++
 *   also a pointer characters, [   9, 10, 11]  =0 
 * 
 *   if bucket == 0, len = maxLen
 *   
 * 
 * while(right <= s.length-1 && right-left >=)
 * 
 * 
 *   bucket ++
 * 
 *   bucket--
 *   decreement the hashmap occurences as you reverse the s
 */
var isSubStringcharacterFound = function (char, hashMap) {
    if (hashMap.hasOwnProperty(char)) {
        return true;
    }
    return false;
}


var minWindow = function (s, t) {
    let minLen = Number.MAX_SAFE_INTEGER, minLeft = Number.MAX_SAFE_INTEGER
    if (t.length > s.length) {
        return "";
    }

    if (t.trim().length <= 0) {
        return "";

    }


    let hashMap = {}, bucket = 0;

    for (let char of t) {
        hashMap[char] = (hashMap[char] ?? 0) + 1;
    }

    bucket = Object.keys(hashMap).length;

    let left = 0;




    for (let right = 0; right < s.length; right++) {

        let char = s[right];
        if(isSubStringcharacterFound(char, hashMap)){
            hashMap[char]--;
            if (hashMap[char] == 0) {
                bucket--;
            }
        }

        while(left<= right && bucket ==0){
            let len = right - left;
            if (len < minLen) {
                minLen = len;
                minLeft = left;
            }
            let index = left;
            hashMap[s[index]]++;

            if (hashMap[s[index]] > 0) {
                    bucket++;
            }

            left++
        }
    }

    return s.slice(minLeft, minLeft+minLen+1)
};


console.log(minWindow("ADOBECODEBANC", "ABC"))