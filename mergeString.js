var mergeAlternately = function(word1, word2) {
    let maxLen = Math.min(word1.length, word2.length);
    let newStr = "";


    for(let i =0; i< maxLen; i++){
        newStr = newStr + word1[i] + word2[i];
    }

    if(word1.length > maxLen){
        newStr = newStr + word1.slice(maxLen+1);
    }

    if(word2.length> maxLen){
        newStr = newStr + word2.slice(maxLen);
    }

    return newStr
};


console.log(mergeAlternately("ab", 'pqrs'));