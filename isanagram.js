var isAnagram = function(s1, s2) {
    

    if(s1.length !=s2.length){
        return false;
    }

    let hashmap = new Map();

    for(let i=0; i<s1.length; i++){
        hashmap.set(s1[i], (hashmap.get(s1[i]) || 0)+ 1)
    }

    for(let i=0; i<s2.length; i++){

        if(!hashmap.has(s2[i])){
            console.log("Val")
            return false;
        }

        if(hashmap.get(s2[i]) == 0){
            return false
        }

        hashmap.set(s2[i], hashmap.get(s2[i]) - 1 )
    }

    const result = [...hashmap.values()].every((element) => {
        return element == 0
    })


    return result;
}


console.log(isAnagram("racecar", "carrace"))