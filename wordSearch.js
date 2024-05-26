class Trie{
    constructor(){
        this.children = {};
        this.endofWord = false;
        this.word = null
    }
}



const insertATrie = (words)=> {
    let root = new Trie();
    let node = root
    for(let word of words){
        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new Trie();
            }
            node = node.children[char]
        }
        node.endofWord = true
        node.word = word
        node = root
    }
   return root;
}


const isValid = (board, i, j) =>{


    let x = board.length;
    let y = board[0].length;


    if((i>= 0 && i < x && j>=0 && j < y)){
        return true;
    }

    return false;
}



const search = (trie, board) =>{
    const result = [];

    const directions = [[-1,0], [1,0], [0, 1], [0,-1]];



    const findMatch = (trie, i, j, visited = {}) =>{
        if(!isValid(board, i, j)){
            return;
        }

        if(visited[`${i}${j}`]){
            return;
        }
        let currentChar = board[i][j]

        if(trie.children?.[currentChar]?.endofWord == true){
            const word = trie.children[currentChar].word
            trie.children[currentChar].endofWord = false;
            result.push(word)
        }
        if(trie.children[currentChar] ==null){
            return;
        }

        visited[`${i}${j}`] = true;


        for(let dir of directions){
            const [ xincr, yincr ] = dir;
            let newObj = {...visited}
            findMatch(trie.children[currentChar], i+xincr, j+yincr, newObj);
        }
    }

    for(let i=0; i< board.length; i++){
        for(let j=0; j< board[i].length; j++){
            findMatch(trie, i, j, {});
        }
    }
    return result;
}


var findWords = function(board, words) {
    const wordTrie = insertATrie(words);
    const result = search(wordTrie, board)
    return result;
};



/**
 * F
 * 
 * 
 * First character find the occurences of the word, 
 */


console.log(findWords(
    [["a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a"]], ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]))




