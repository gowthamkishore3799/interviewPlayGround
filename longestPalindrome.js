var checkPalindrome = function(i, j, palindrome){
    let length = 0;
    if(i < 0 || j>= palindrome.length){
        return {length, index: i+1}
    }



    while(palindrome[i] == palindrome[j] && i>=0 && j< palindrome.length){
        if(i==j){
            length++
        } else{
            length = length+2
        }
        i--;
        j++;

    }


    return {length, index: i+1}


}


var longestPalindrome = function(s) {

    let max = 0
    for(let i=0; i<s.length; i++){
        const oddPalindrome = checkPalindrome(i, i, s);
        const evenPalindrome = checkPalindrome(i, i+1, s);

        console.log(oddPalindrome, evenPalindrome)
        

        if(max < oddPalindrome.length || max< evenPalindrome.length){
            max = Math.max(evenPalindrome.length, oddPalindrome.length);
            index = evenPalindrome.length <=oddPalindrome.length ? oddPalindrome.index : evenPalindrome.index;
        }

    }

    return s.slice(index, index+max)
    
    
};


console.log(longestPalindrome("aa"))