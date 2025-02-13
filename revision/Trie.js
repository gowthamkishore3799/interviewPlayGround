/**
 * Dummy code
 */


class TrieNode {
     children;
     endofWord;
    constructor(){
            this.children = {},
            this.endofWord = false
    }
}


class Trie {
    root;
    constructor(){
        this.root = {};
    }


    insert(word){
        let node = this.root;
        let char
        for(let i=0; i<word.length;i++){
            char = word[i];
            if(!node[char]){
                node[char] = new TrieNode()
            }
               node = node[char]?.children;
        }
        node.endofWord = true;
    }


    search(word){
        let node = this.root;
        let char;

        for(let i=0; i<word.length;i++){
            char = word[i];
            if(!node[char]){
                return false
            }

            node = node[char].children
        }


        if(!node.endofWord) {
            return false
        }

        return true;
    }


    startsWith(prefix){
        let node = this.root;
        for(let char of prefix){
            if(!node[char]){
                return false
            }
            node = node[char].children
        }

        return true;
    }
}


const v = new Trie()


v.insert("ab")
v.insert("a")

console.log(v.search("ab"))

console.log(v.startsWith("a"))



