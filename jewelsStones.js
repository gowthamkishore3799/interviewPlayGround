/**
 * 
 * 
 * 
 * for of every jewel and add in hashmap jewelhashmap o(n)
 * 
 * for of every stones and if its hashmpa count +=1
 * @param jewels string
 * @param stones string
 */
var numJewelsInStones = function(jewels, stones) {
    let jewelHashmap = new Map();

    for(let jewel of jewels){
        jewelHashmap.set(jewel, true);
    }

    let countOfStones = 0;


    for(let stone of stones){
        if(jewelHashmap.has(stone)){
            countOfStones+=1
        }
    }

    return countOfStones;
};

console.log(numJewelsInStones("aA","aAAbbbb"))