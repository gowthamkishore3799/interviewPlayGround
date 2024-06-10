class classTries{
    children;
    endofWord;
    constructor(){
        this.children = {};
        this.endofWord = false
    }
}


class Trie {
    root;
    constructor(){
        this.root = { children : {}, endofWord: false};
    }
    insert(word: string): void {
        let node = this.root
        for(let char of word){
            if(!node?.children?.[char]){
                node.children[char] = new classTries();
            }
            node = node.children[char];
        }
        node.endofWord = true;
    }

    search(word: string): boolean {
        let node = this.root;
        for(let char of word){
            if(!node.children[char]){
                return false;
            }

            node = node.children[char];
        }

        if(node.endofWord == true){
            return true
        }

        return false;
    }

    startsWith(prefix: string): boolean {
        let node = this.root;
        for(let char of prefix){
            console.log(node.children, char)
            if(!node.children[char]){
                return false;
            }

            node = node.children[char]
        }

        return true;
    }
}


const trie = new Trie();
trie.insert("apple");
trie.search("apple");   // return True
trie.search("app");     // return False
console.log(trie.startsWith("app")); // return True
trie.insert("app");
console.log(trie.search("app")); 