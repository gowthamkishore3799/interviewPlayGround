function buildHashMap(t){
        let hashmap = new Map();
        let uniqueChar = 0;
        for(let i =0; i<t.length; i++){
            let alreadyPresentCount = hashmap.get(t[i]) || 0
            hashmap.set(t[i], alreadyPresentCount + 1)

            if(alreadyPresentCount == 0){
               uniqueChar++; 
            }
        }

        return [hashmap, uniqueChar];
    }

    function findsubStringChar(s, hashmap){
        let stack = [];
        for(let i=0; i<s.length; i++){
            if(hashmap.has(s[i])){
                stack.push(i);
            }
        }

        return stack;
    }




    function minWindow(s, t) {
        let matchingString = ""
        if(s.length < t.length) return matchingString;

        const [hashmapT, uniqueChar] = buildHashMap(t);
        const substringChar = findsubStringChar(s, hashmapT);
        let maxLen = Number.MAX_SAFE_INTEGER;
        


        if(substringChar.length <=0 ) return matchingString; // No matching character


        let i = substringChar.shift();
        let j = i;

        let hashmapS = new Map();
        let validCount = 0;

        while(i<= s.length-t.length && j<s.length){ // until the sentence..
          let char = s[j];

          if(hashmapT.has(char)) {
             hashmapS.set(char, (hashmapS.get(char) || 0) + 1)

            if(hashmapS.get(char) == hashmapT.get(char)){
              validCount++;
            }

            console.log(validCount, uniqueChar, i, j)

            if(validCount == uniqueChar){

                //Update the match
                let len = j-i+1;
                if(len < maxLen) {
                    maxLen = len;
                    matchingString=s.slice(i, i+len);
                } 


                while(validCount >= uniqueChar){
                    let startChar = s[i];

                    let charOcc = hashmapS.get(startChar)-1;
                    hashmapS.set(startChar, charOcc);
                    console.log(charOcc, "char occur")

                    if(charOcc < hashmapT.get(startChar)) {
                        validCount--;
                    }

                    i = substringChar.shift();
                    
                    len = j-i+1;
                    console.log(i, "I", j, "J", len, maxLen)
                    if(len < maxLen && validCount == uniqueChar) {
                        maxLen = len;
                        matchingString=s.slice(i, i+len);
                    } 
                }

            
            }
          }
          j++;
        }
        return matchingString
    }


    console.log(minWindow("aaaaaaaaaaaabbbbbcdd", "abcdd"))
