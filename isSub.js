var isSubsequence = function(s, t) {
    let i =0, j=0;


    while(i<s.length && j<t.length){


        if(s[i] == t[j]){
            i++;
        } 
        j++;
    }


    if(i == s.length){
        return true;
    }

    return false
};

console.log(isSubsequence("axc", "ahbgdc"))