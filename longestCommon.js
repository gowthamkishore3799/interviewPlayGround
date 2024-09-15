/**
 * Take the first character
 * 
 * 
 * str - flower
 * 
 * 
 * 
 * for(let )
 * 
 * @param {*} strs 
 */

var longestCommonPrefix = function(strs) {

    if(strs.length == 1){
        return strs[0];
    }
    strs.sort();


    let first = strs[0];
    let last = strs[strs.length-1];
    let prefix = "";


    for(let i=0; i<first.length; i++){

        if(first[i] != last[i]){
            return prefix
        }



        prefix+= first[i];
    }

    return prefix;
};

console.log(longestCommonPrefix(["",""]))