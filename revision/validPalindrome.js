var isPalindrome = function(s) {


    if(s.length == 1){
        return true;
    }

    let i =0, j=s.length-1;

    s = s.toLowerCase();

    while(i<=j){

        if(!(s.charCodeAt(i) >=97 && s.charCodeAt(i) <= 122) && !(s.charCodeAt(i)>= 48 && s.charCodeAt(i)<= 57)){
            i++;
        } else if(!(s.charCodeAt(j) >=97 && s.charCodeAt(j) <= 122) && !(s.charCodeAt(j)>= 48 && s.charCodeAt(j)<= 57)){
            j--;
        } else {
            if(s[i] != s[j]){
                return false;
            }

            i++;
            j--;
        }
    }


    return true;
};


console.log(isPalindrome("0P"))