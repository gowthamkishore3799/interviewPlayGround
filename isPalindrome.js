/**
 * @param {string} s
 * @return {boolean}
 */


var checkIfPalindrom = function(str){

    let left = 0;
    let right = str.length-1;


    while(left<=right){
        if(str[left] != str[right]){
            return false;
        }
        left++;
        right--;
    }

    return true;
}


var removeSpecialCharacters = function(str){
    return str.toLowerCase().replace(/[^a-z0-9]/gi, "").trim();
}
var isPalindrome = function(s) {
    const str = removeSpecialCharacters(s);
    const isAPalindrome = checkIfPalindrom(str);
    return isAPalindrome;
};