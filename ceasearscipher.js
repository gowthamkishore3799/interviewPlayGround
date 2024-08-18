function caesarCipher(s, k) {


    /**
     * Case i: Lowercase
     *  97-122
     *   
     *  if exceeds 123 , 123-26
     * 
     * 
     * similary uppercase
     * 
     * 65 - 90
     * 
     * 
     * if exceeds 91, 91-26
     */

    let char = null, charcode, newString = "";
    for(let i=0; i<s.length; i++){


        if(s.charCodeAt(i) >= 65 && s.charCodeAt(i) <=90){
            //Uppercase char;
            let newCharCode = s.charCodeAt(i) + (k%26)
            charcode = newCharCode > 90 ? newCharCode-26 : newCharCode;

           
            newString += String.fromCharCode(charcode);
        } else if(s.charCodeAt(i) >= 97 && s.charCodeAt(i) <=122){
            let newCharCode = s.charCodeAt(i) + (k%26)
            charcode = newCharCode > 122 ? newCharCode-26 : newCharCode;
            newString += String.fromCharCode(charcode)
        } else {
            newString += s[i]
        }
    }

    return newString;

}


console.log(caesarCipher("www.abc.xy", 87))