function findOccurences(t){
    let hashMap = new Map();
    let charCounter = 0;
    for(let char of t){

        if(!hashMap.has(char)){
            charCounter +=1
        }
        hashMap.set(char, (hashMap.get(char) || 0) + 1)
    }

    return {hashMap, charCounter}
}

function findOccurencesofS(s, hashMap){
    let occurences = []
    for(let i=0; i<s.length; i++){
        if(hashMap.has(s[i])){
            occurences.push(i)
        }
    }

    return occurences;
}


function minWindow(s,t){
    if(s.length< t.length){
        return ""
    }



    let {hashMap, charCounter} = findOccurences(t);

    let occurences = findOccurencesofS(s, hashMap);
    let maxLen = Number.MAX_SAFE_INTEGER
    let index = null


    for(let occurence of occurences){
        let len = findMatch(occurence, new Map(hashMap), charCounter, maxLen, s)
        if(len < maxLen){
            index = occurence;
            maxLen = len;
        }
    }


    console.log(index, maxLen)


    if(maxLen != Number.MAX_SAFE_INTEGER){
        return s.substring(index, index+maxLen);
    }

    return ""
}



function findMatch(index, hashMap, counter, maxLen, s){

    let i = index;
    let j = index;
    let length = maxLen


    while(j< s.length && j-i+ 1 <= maxLen){
        if(hashMap.has(s[j])){
            let count = hashMap.get(s[j])-1;
            hashMap.set(s[j], count);



            if(count == 0){
                counter--
            }
        }


        if(counter == 0){
            length = j-i+1;

            return length;
        }

        j++;
    }
}


console.log(minWindow("ADOBECODEBANC", "ABC"))

/**
 * 
 * first appraoch is brute force like check all the combinations
 * next approach is store the characters whic are in hashmap
 * 
 * and from there exapnd it and find the lenght
 * 
 * if the expand is greatter than already one, next occurem
 * 
 * 
 * 
 * if (s.length< t.length){
 * return empty
 * 
 * 
 * hashmap, counter = findhashmap(t)
 * 
 * occurenceoftcharacters = findOccurences(s)
 * 
 * [ADOBECODEBANC]
 * 
 * [0, 3, 5, 9, 10, 12]
 * 
 * for(let index of occurence){
 *  len = findMatch(index, hashmap, counter, maxLen)
 * len = len 
 * }
 * 
 * findMatch(){
 * 
 * i= j
 * while(j< s.length && j-i<maxLen){
 * if(s[j] == hashmap && counter){
 * hashmap--
 * 
 * if hashmap --
 * counter --
 * 
 * }
 * 
 * 
 * if(counter== 0){
 * len = j-i
 * return;
 * }
 * 
 * j++;
 * 
 * }
 * 
 * i}
 * 
 */