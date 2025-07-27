/**
 * 
 * Class Trie:
 * 
 * Push into trie
 * 
 * if tree isalready there, update its count:
 * 
 * trie={
 * children[a]                       : count: 1, children}
 */

class TrieNode{
    children; count; isEndOfWord;
    constructor(){
            this.children ={};
            this.count= 1;
            this.isEndOfWord= false;
    }
}

class Trie{
    trie;
    words;
    constructor(words){
        this.trie = new TrieNode();
        this.words = words;
    }

    insert(){
        for(let word of this.words){
            this.#insertWord(word); // Insert each word
        }
    }

    #insertWord(word){
        if(word.length<0){
            return 0;
        }

        let node = this.trie;
        for(let char of word){
            

            if(!node.children?.[char]){
                node.children[char] = new TrieNode()
            } else{
                let count = node.children[char].count;
                node.children[char].count = count+1;
            }

            node = node.children[char];
        }
    }

    display(){
        console.log(this.trie, "Trie.")
    }

    findSumOfWord(word){
        let node = this.trie;
        let sum = 0;
        for(let char of word){

            // console.log(node.children[char]?.count, node.children[char], char, word)
            sum += node.children[char]?.count;

            node = node.children[char]
        }

        return sum;

    }


    findSum(){
        let result = [];
        for(let word of this.words){
            let sum = this.findSumOfWord(word);
            result.push(sum)
        }

        return result;
    }
}
var sumPrefixScores = function(words) {
    let trie = new Trie(words);
    trie.insert();
    // trie.display()
    let sum= trie.findSum();
    return sum;
};


console.log(sumPrefixScores(["abcd"]))