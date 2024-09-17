



var canConstruct = function(ransomNote, magazine) {
    let magazineHashMap = new Map();


    for(let mag of magazine){
        magazineHashMap.set(mag, (magazineHashMap.get(mag) ?? 0) +1);
    }


    for(let note of ransomNote){
        if(!magazineHashMap.has(note)){
            return false;
        }

        let val = magazineHashMap.get(note)-1;

        if(val <0){
            return false;
        }
        magazineHashMap.set(note, val);

    }

    return true;




};


console.log(canConstruct("aa", "aab"))