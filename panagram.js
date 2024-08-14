function pangrams(s) {

    let arr = Array.from({length: 26}).fill(false);


    s = s.toLowerCase();
    let index = null;

    for(let i =0; i<s.length; i++){
       index = s.charCodeAt(i)-97;

       if(index >=0 && index<26){
        arr[index] = true;
       }
    }
    // Write your code here



    for(let i =0; i< arr.length; i++){
        if(!arr[i]){
            return "not pangram"
        }
    }

    return "pangram";

}


console.log(pangrams("We promptly judged antique ivory buckles for the next prize"));
