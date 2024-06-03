var Tries = /** @class */ (function () {
    function Tries() {
        this.children = {};
        this.endofWord = false;
    }
    return Tries;
}());
var WordDictionary = /** @class */ (function () {
    function WordDictionary() {
        this.stack = [];
        this.root = { children: {}, endofWord: false };
    }
    WordDictionary.prototype.addWord = function (word) {
        this.addWordIntoTrie(word);
    };
    WordDictionary.prototype.addWordIntoTrie = function (word) {
        var root = this.root;
        var node = root;
        for (var _i = 0, word_1 = word; _i < word_1.length; _i++) {
            var char = word_1[_i];
            if (!node.children[char]) {
                node.children[char] = new Tries();
            }
            node = node.children[char];
        }
        node.endofWord = true;
        this.root = root;
    };
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
    WordDictionary.prototype.search = function (word) {
        return this.searchDFS(word, 0, this.root);
    };
    WordDictionary.prototype.searchDFS = function (word, index, node) {
        console.log(node);
        var char = word[index];
        if (node.endofWord == true && index == word.length) {
            console.log("Inside..");
            return true;
        }
        if (char != ".") {
            if (!(node === null || node === void 0 ? void 0 : node.children[char])) {
                return false;
            }
            return this.searchDFS(word, index + 1, node.children[char]);
        }
        else {
            var childrens = node.children;
            for (var child in childrens) {
                var result = this.searchDFS(word, index + 1, node.children[child]);
                if (result) {
                    return true;
                }
            }
        }
        return false;
    };
    return WordDictionary;
}());
// const wordDictionary = new WordDictionary();
var wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
// console.log(wordDictionary.search("pad")); // return False
// console.log(wordDictionary.search("bad")); // return True
console.log(wordDictionary.search("b.."));
// console.log(wordDictionary.search("b.."))
