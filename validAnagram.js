
var isAnagram = function(s, t) {
    if(!s || !t || s.length != t.length){
        return false;
    }

    let hashMap = new Map();


    for(let char of s){
        if(!hashMap.has(char)) hashMap.set(char, 1);
        else hashMap.set(char, hashMap.get(char)+1)
    }



    for(let char of t){
        if(!hashMap.has(char) || hashMap.get(char) <=0){
            return false;
        }


        hashMap.set(char, hashMap.get(char)-1)
    }


    for(let [key,value] of hashMap){
        if(value>0){
            return false;
        }
    }
    return true
};

console.log(isAnagram("anagrams", "nagaram"))