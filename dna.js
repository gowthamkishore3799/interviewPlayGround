


function findCharOccur(str){
    let map = new Map();


    for(let char of str){
        map.set(char, (map.get(char) || 0 )+1)
    }
    return map;

}

function isValidAnagrams(s, t){

    let noofSModification = 0;
    let noofTModification = 0;

    for(let key of s.keys()){


        if(t.has(key)){
            if(s.get(key )== t.get(key)){
                s.delete(key);
                t.delete(key);
            } else{
                if(s.get(key) < t.get(key)){
                    t.set(key, t.get(key)-s.get(key));
                    s.delete(key)
                } else{
                    s.set(key, s.get(key)-t.get(key));
                    t.delete(key)
                }
            }
        }
    }

    return Math.abs(s.size-t.size)<=1

    /**
     * Case 
     * 
     * i) char in s not present in t or in t not present in s
     * 
     * ii) char in s or t greater than one present in other
     * 
     * 
     */
}


function findDNAPairs(strs){

    let result = [];
    
    
    for(let i =0; i<strs.length ; i++){
        
        let [s,t] = strs[i];
        
        const scharOcc = findCharOccur(s);
        const tcharOcc = findCharOccur(t);



        let validAnagram = isValidAnagrams(scharOcc, tcharOcc)
        console.log(validAnagram)
        result.push(validAnagram);
    }
    return result;
}

const result = findDNAPairs([["abcee", "acdeedb"], ["sljffsajej", "sljsje"]])