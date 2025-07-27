import java.util.HashMap;
import java.util.Map;
import java.util.Set;

class Trie{
    public Map<Character, Trie> children;
    public boolean endOfWord;
    public Trie(){
        this.children = new HashMap<>();
        this.endOfWord = false;
    }
}


class WordDict   {
    private final Trie t;
    public WordDict() {
        this.t = new Trie();
    }
    
    public void addWord(String word) {
        Trie node = this.t;
        for(int i=0; i<word.length(); i++){
            char ch = word.charAt(i);
            if(!node.children.containsKey(ch)){
                node.children.put(ch, new Trie());  
            }

            node = node.children.get(ch);
        }
        node.endOfWord = true;
    }



    public boolean searchWord(Trie node, String wordChar, int index){
        if(node.endOfWord && index == wordChar.length()){
            return true;
        }

        if(node.children.isEmpty()){
            System.out.println(node.children.keySet());
            return false;
        }

        char currentChar = wordChar.charAt(index);
        if(currentChar == '.'){
            Set<Character> chars = node.children.keySet();
            for(char ch: chars){
                return this.searchWord(node.children.get(ch),wordChar, index+1);
            }
        } else{
            if(!node.children.containsKey(currentChar)){
                return false;
            }
            return this.searchWord(node.children.get(currentChar),wordChar, index+1);
        }
        return false;
    }
    
    public boolean search(String word) {
        return this.searchWord(this.t, word, 0);
    }

    public static void main(String[] args){
        WordDict wd = new WordDict();
        wd.addWord("bad");
        wd.addWord("sad");
        boolean result = wd.search("b.d");
        System.out.println(result);

    }
}
