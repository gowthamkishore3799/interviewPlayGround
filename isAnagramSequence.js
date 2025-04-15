function dna(dnaSequences){
    let result = [];
    for(let dnaSequence of dnaSequences){

        let isSameSequence = true;

        const dnaSequence1 = new Map();
        const dnaSequence2 = new Map();
        let [seq1, seq2] = dnaSequence;


        for(let char of seq1){
            dnaSequence1.set(char, (dnaSequence1.get(char) || 0) +1)
        }

        for(let char of seq2){
            dnaSequence2.set(char, (dnaSequence2.get(char) || 0) +1)
        }

        console.log(dnaSequence1, dnaSequence2)



        let [parentSequence, childSequence] = dnaSequence1.keys().length > dnaSequence2.keys().length ? [dnaSequence1, dnaSequence2] : [ dnaSequence2, dnaSequence1];


        for(let char of parentSequence.keys()){

            if(!childSequence.has(char)){
                continue;
            }


            if(parentSequence.get(char)  != childSequence.get(char)){
                isSameSequence = false;
                break
            }
        }

        result.push(isSameSequence);

    }

    return result;
}




console.log(dna( [["safddadfs", "famafmss"],  ["sljffsajej", "sljsje"], ["abcee", "acdeedb"]]))




/**
 * Loop throgu each dna sequence
 * 
 * First add in hashmap to find the occurence count
 * 
 * Then based on char, remove the characters or remove the position
 * 
 * if(!no char)
 * 
 * 
 * remove
 * 
 * else decreement
 * 
 * 
 * 
 * o(n) =>3
 * 
 * 
 * Then loop again and check if only one valid present
 * 
 * 
 * if more than one isOnePresent return false;;;
 */


// sljsjej
// sljsje



// sljsje