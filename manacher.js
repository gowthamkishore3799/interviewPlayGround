
var longestPalindrome = function(s) {
    let preprocessedString = "$#" + s.split("").join("#") + "#^";

    let c=1, r=1;
    let n = new Array(preprocessedString.length).fill(0)

    for(let i =1; i < preprocessedString.length-1; i++){

        if(i<r){
            n[i] = Math.min(r-i, n[2*c-i]) 
        };





        while(preprocessedString[i+1+n[i]] == preprocessedString[i-1-n[i]]){
            n[i] = n[i]+1;
        }


        if(i+n[i]>r){
            c = i;
            r = i+n[i];
        }
    }

    console.log(n)

}



/**
 * First, preprocess the string to $#a#b#b#a#$
 * 
 * 
 */




console.log(longestPalindrome("abba"));