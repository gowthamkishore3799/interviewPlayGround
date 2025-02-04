function longestPalindromeManacher(s) {
    if (!s || s.length === 0) return "";

    // Step 1: Transform input string
    let T = "^#" + s.split("").join("#") + "#$";
    let p = new Array(T.length).fill(0);

    let C = 0, R = 0;



    for(i=1; i<T.length; i++){

        let mirror = 2 * C - i;


        if(i<R){
            p[i] = Math.min(p[i], p[mirror]);
        }


        while(T[i+ p[i]+1] == T[i-p[i]-1]){
            p[i]++
        }



        if(i+p[i]>R){
            R = i+p[i];
            C = i
        }
    }
    let maxLen = Math.max(...p);
    let centerIndex = p.indexOf(maxLen);
    let start = (centerIndex - maxLen) / 2; 

    return s.substring(start, start + maxLen);

  
}

// Example Usage
console.log(longestPalindromeManacher("babad")); // Output: "bab" or "aba"
console.log(longestPalindromeManacher("cbbd"));  // Output: "bb"




