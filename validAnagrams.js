/**
 * First need to compare, instead of comparing, can we find the set
 * 
 * 
 * ate, eat, all has same characters.....
 * 
 * 
 * 
 * What you can do is, in a for loop, sort every character and add in hashmap 
 * 
 * 
 * 
 * after adding, convert into new hashmap
 * 
 */




var groupAnagrams = function(strs) {
    const hashMap = new Map();
    for(let str of strs){
        const val = str.split("").sort().join("")
        const element = hashMap.get(val) ?? [];
        element.push(str);

        hashMap.set(val, element);
    }

    return Array.from(hashMap.values());
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))