/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

/**
 * Sliding window approach,
 * 
 * First take the i=0 to i<length-s1.
 * 
 * another while loop
 * 
 * if s2 not in hashmap
 * 
 * next iteration
 * @param {*} s1 
 * @param {*} s2 
 */

var findWordOccurence = function(word){


    let hashMap = new Map();
    let counter = 0;

    for(let char of word){
        counter++;
        hashMap.set(char, (hashMap.get(char)?? 0) +1)

    }
    return {
        hashMap,
        counter
    }
}



var checkInclusion = function(s1, s2) {
    let { hashMap, counter } = findWordOccurence(s1);



    let i = 0, j;

    if(s2.length < s1.length){
        return false;
    }




    while(i<=s2.length-s1.length){

        console.log(i, j)
        if(counter == 0){
            return true;
        }
        if(!hashMap.has(s2[i])){
            i++;
        } else if(j>i && (!hashMap.has(s2[j]) || hashMap.get(s2[j]) <=0)){
                if(hashMap.has(s2[i])){
                    hashMap.set(s2[i], hashMap.get(s2[i])+1);
                    counter++;
                }
                i++;
        }
         else if(j>i && (hashMap.has(s2[j]) && hashMap.get(s2[j])>0)) {
            hashMap.set(s2[j], hashMap.get(s2[j])-1);
            counter--;
            j++;
        }else{
            hashMap.set(s2[i], hashMap.get(s2[i])-1);
            counter--;
            j = i+1;
        }
    }



    return false;
};



console.log(checkInclusion("ab", "eidbcabooo"))


