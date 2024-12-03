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
        if(!hashMap.has(char)){
            counter++;
        }
        hashMap.set(char, (hashMap.get(char)?? 0) +1)

    }
    return {
        hashMap,
        counter
    }
}



var checkInclusion = function(s1, s2) {
    const { hashMap, counter } = findWordOccurence(s1);



    for(let i=0; i< s2.length-s1.length+1; i++){
        let j = i;


        while(j< s1.length){

        }
    }
};



console.log(checkInclusion("ab", "eidbaooo"))

8-2
6