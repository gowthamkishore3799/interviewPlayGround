/**
 * 
 * To build suffix tree, two options are needed
 * 
 * 
 * 
 * 
 */



class Node{
    constructor(){
        this.children= {};
        this.isEnd = false;
        this.index = null;
    }
}

class SuffixTree{
    root;

    constructor(){
        this.root = new Node();
    }


    insertSuffixTree(str, index){
        let current = this.root;
        for(let i =0; i<str.length; i++){
            let char = str[i];


            if(!current?.children[char]){
                current.children[char] = new Node();
            }
            current = current.children[char];
        }

        current.isEnd = true;
        current.index = [index, index+str.length-1]

    }

    insert(str){
        str = str.toLowerCase();

        for(let i = 0; i<str.length; i++){
            this.insertSuffixTree(str.slice(i), i);
        }

        /**
         * Splice and add it
         * from i = 0 to n-1;
         */


        console.log(JSON.stringify(this.root))
    }
}


const st = new SuffixTree();
st.insert("BANANA")