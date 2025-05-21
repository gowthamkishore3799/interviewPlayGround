var buildWordOccurence = function(words){
    let wordOccurence = new Map();
    let counter = 0;


    for(let word of words){
        for(let char of word){
            let currentCount = wordOccurence.get(char) || 0
            if(currentCount == 0) counter++;
            wordOccurence.set(char, currentCount + 1);
        }
    }

    return [wordOccurence, counter]
}


var findSubstring = function(s, words) {
    // your logic here


    let stringlength = words[0].length*words.length;
    let subStringIndexes = new Set();


    if(s.length < stringlength){
        return [];
    }

    let [wordOccurence, counter] = buildWordOccurence(words);

    let i =0, j=0;

    console.log(s.length-stringlength)

    while(i<=s.length-stringlength && j<s.length){


       // if j is present in hashmap
       let currentJchar = s[j];

        if (wordOccurence.has(currentJchar) && wordOccurence.get(currentJchar)>0) {
            let occurence = wordOccurence.get(currentJchar) - 1;
            wordOccurence.set(currentJchar, occurence);
            if (occurence == 0) {
                counter--;
            }
        } else{
            //Assuming the character is not present or is 0
            while(i<=j){
                let currentIChar = s[i]
                if(wordOccurence.has(currentIChar)){
                    let occurence = wordOccurence.get(currentIChar);

                    wordOccurence.set(currentIChar, occurence+1);
                    if(occurence == 1) counter++;
                }
                i++;
            }
        }

        if(counter == 0) subStringIndexes.add(i);
        j++;
    }

    console.log(subStringIndexes)

    /**
     * first caclualte hashmap of words
     * counter = numberOfWords
     * 
     * 
     * barfoothefoobar
     * if s.length is less than words[0].length * words.length
     * return -1
     * 
     * totallength-length
     * barfoo
     * 
     * while(i<=character.length){
     * 
     * hashmap[j] > 0
     * 
     * 
     * hashmap--
     * 
     * 
     * if(counter==0){
     * push(index)
     * 
     * 
     * 
     * if(counter == 0){
     * i ++
     * increemnt hashmap
     * increment counter
     * }
     * 
     * if(!hashmap(word)){
     * i++;
     * increment hsahmap
     * //increent counter if its 0}
     * 
     * }
     * 
     * 
     * }
     */
};

console.log(findSubstring("barfoothefoobar", ["foo","bar"]))