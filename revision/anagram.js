
var isAnagram = function(s, t) {
    if(!s || !t || s.length != t.length){
        return false;
    }

    let hashMap = new Map();
    // giveme anagram
    // console.log
    for(let i=0; i<s.length; i++){
        hashMap.set(s.charCodeAt(i), (hashMap.get(s.charCodeAt(i)) || 0) +1)


    }

    console.log(hashMap)



    for(let i=0; i<t.length; i++){
        if(!hashMap.has(t.charCodeAt(i)) || hashMap.get(t.charCodeAt(i)) <=0){
            return false;
        }


        hashMap.set(t.charCodeAt(i), hashMap.get(t.charCodeAt(i))-1)
    }


    for(let value of hashMap.values()){
        if(value>0){
            return false;
        }
    }
    return true
};

console.log(isAnagram("anagram", "nagara"))