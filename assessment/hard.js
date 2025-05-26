

function wordOccurence(word){
    let occurence = new Map();
    for(let i=0; i<word.length; i++){
        let char = word[i];
        let currentOccur = occurence.get(char) || []; //Do we need set, duplicates wont be there, but safer side
        currentOccur.push(i)
        occurence.set(char, currentOccur);
    }
    
    return occurence
}


function findIndex(char, wordOccurences, index){
    
    let occur = wordOccurences.get(char) || []
    
    console.log(char, occur, index)
    
    if(occur.length<=0) {
        return -1;
    }
    let left = 0;
    let right = occur.length;
    
    while(left< right) {
    let mid = Math.floor((left+right)/2);
        
    if(occur[mid] > index){
     right = mid;
    } else{ 
    left = mid+1;
     } 
    }
    return occur[left];
}

let strings = "dsahjpjauf"
let wordOccurences = wordOccurence(strings) // To find the hashmap for the word
let words = ["ahjpjau"]
let matchedOccurence = 0;
for(let word of words){
    let prevIndex = -1;
    function dfs(index){
        if(index == word.length){
          return true;
        }
        /**
        Match the character from occurence and do a binary search
        **/
        let char = word[index];
        let newIndex = findIndex(char, wordOccurences, prevIndex)
        if(newIndex > prevIndex && word[index] == strings[newIndex]) {
            prevIndex = newIndex;
            return dfs(index+1);
        } else{
            return false;
        }
    }
    
    
    let result = dfs(0)
    
    if(result) matchedOccurence++;
}


