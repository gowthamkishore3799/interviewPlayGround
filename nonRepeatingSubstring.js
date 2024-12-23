function nonRepeatingSubstring(word){
    let maxLen = 0;
    let hashmap = new Map();



    let i =0;
    let j = i+1;

    if(word.length == 0){
        return 0;
    }


    while(j<word.length){
        if(hashmap.has(word[j]) && hashmap.get(word[j])>i){
            i = hashmap.get(word[j])+1;
            hashmap.set(word[j], j);
            console.log(i, hashmap)
        } else {
            hashmap.set(word[j], j);
        }
        maxLen = Math.max(maxLen, j-i+1)
        j++;
    }
    return maxLen
}


console.log(nonRepeatingSubstring("abcabcbbacdefgh"))