class Tries {
    children = {};
    endofWord = false;
}




class WordDictionary {

    root: Tries;
    stack: any = []
    node: Tries;
    constructor() {
        this.root = { children : {}, endofWord: false};
    }

    addWord(word: string): void {
        this.addWordIntoTrie(word);
    }


    addWordIntoTrie(word: string): void {
        let root = this.root;
        let node = root;

        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new Tries();
            }

            node = node.children[char];
        }
        node.endofWord = true;
        this.root = root;
    }



    /**
     * 
     * @param word Recursion..
     * 
     * 
     * 
     *  { b -> { a -> {d}}}
     * 
     * @returns 
     */
     search(word: string): boolean {
        return this.searchDFS(word, 0, this.root);
    }

    searchDFS(word, index, node): boolean {

        let char = word[index];


        if(node.endofWord == true && index == word.length){
            return true;
        }


        if(char != "."){
            if(!node?.children[char]){
                return false
            }
            return this.searchDFS(word, index+1, node.children[char])
        } else {
            let childrens = node.children;
            for (let child in childrens) {
                let result = this.searchDFS(word, index + 1, node.children[child])

                if(result){
                    return true;
                }
            }
        }

        return false;
    }

    
}
 

// const wordDictionary = new WordDictionary();

const wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
// console.log(wordDictionary.search("pad")); // return False
// console.log(wordDictionary.search("bad")); // return True
console.log(wordDictionary.search("b.."))
// console.log(wordDictionary.search("b.."))






