/**
 * A-M (13)
 * N-Z(13)
 * 
 * 
 * 
 * 
 * 
 * "A" + 13
 */



function findRot13(str){

    /**
     * let newStr = ""
     * for(letindex of str){
     * 
     * if(str.charCodeAt(i) >=97 && str.charCodeAt(i)<=122){
     *  let code = str.charCodeAt(i) - "a".charCodeAt(i);
     * 
     *  code = ((code+ 13) % 26) + str.charCodeAt(i); 
     * 
     * } else{
     * let code = str.charCodeAt(i) - "A".charCodeAt(i);
     * 
     *  code = ((code+ 13) % 26) + str.charCodeAt(i);
     * 
     * }
     */


    let newStr = "";

    for(let i=0; i<str.length; i++){
        let code;

        if(str.charCodeAt(i) >=97 && str.charCodeAt(i)<=122){

            code = str.charCodeAt(i) - "a".charCodeAt(0);
            code = ((code+13) % 26) + str.charCodeAt(i);
        } else{
            
            code = str.charCodeAt() - "A".charCodeAt(0);
            code = ((code+13) % 26) + str.charCodeAt(i);
        }

        console.log(String.fromCharCode(code), "Char code")

        newStr = newStr + String.fromCharCode(code);
    }

    return newStr;
}

// console.log(findRot13("ABC"))


function findChineseString(str){

    const firstChar = 19968;
    const lastchar = 40959;
    const range = 10496;


    /**
     * 19968 - 30464 (1st range)
     * 30465 - 40959
     */
    let code;
    let newStr = "";

    for(let i=0; i<str.length;i++){
        if(str.charCodeAt(i) >=firstChar && str.charCodeAt(i) <=40959){ 
            code = str.charCodeAt(i) - 19968; //30465 10496
            code = ((code + 10496) % 20992) + 19968// 好 (30465)
            newStr += String.fromCharCode(code);
        } else{
            newStr += str[i];
        }
    }

    return newStr;
}




console.log(findChineseString("你好世界a"));



