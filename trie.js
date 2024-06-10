var classTries = /** @class */ (function () {
    function classTries() {
        this.children = {};
        this.endofWord = false;
    }
    return classTries;
}());
var Trie = /** @class */ (function () {
    function Trie() {
        this.root = { children: {}, endofWord: false };
    }
    Trie.prototype.insert = function (word) {
        var _a;
        var node = this.root;
        for (var _i = 0, word_1 = word; _i < word_1.length; _i++) {
            var char = word_1[_i];
            if (!((_a = node === null || node === void 0 ? void 0 : node.children) === null || _a === void 0 ? void 0 : _a[char])) {
                node.children[char] = new classTries();
            }
            node = node.children[char];
        }
        node.endofWord = true;
    };
    Trie.prototype.search = function (word) {
        var node = this.root;
        for (var _i = 0, word_2 = word; _i < word_2.length; _i++) {
            var char = word_2[_i];
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        if (node.endofWord == true) {
            return true;
        }
        return false;
    };
    Trie.prototype.startsWith = function (prefix) {
        var node = this.root;
        for (var _i = 0, prefix_1 = prefix; _i < prefix_1.length; _i++) {
            var char = prefix_1[_i];
            console.log(node.children, char);
            if (!node.children[char]) {
                return false;
            }
        }
        return true;
    };
    return Trie;
}());
var trie = new Trie();
trie.insert("apple");
trie.search("apple"); // return True
trie.search("app"); // return False
console.log(trie.startsWith("app")); // return True
trie.insert("app");
console.log(trie.search("app"));
