
var findManacher = function(str) {
    /**
     * 
     */

    let c=0, r=0;

    let T = "^#" + str.split("").join("#") + "#$";

    const P = new Array(T.length).fill(0);



    //^#a#b#a#$

    for(let i =1; i<T.length; i++){
        const mirror = 2*c-i


        if(i<r){
            P[i] = Math.min(P[mirror], r-i)
        }


        while(T[i + P[i] + 1] === T[i - P[i] - 1] && i + P[i] + 1 < T.length && i - P[i] - 1 >= 0){
            P[i]++;
        }



        if(i+P[i]>r){
            c=i;
            r = i+P[i]
        }
    }

    let maxLength = 0;
    let centerIndex = 0;
    for (let i = 0; i < T.length; i++) {
        if (P[i] > maxLength) {
            maxLength = P[i];
            centerIndex = i;
        }
    }

    console.log(centerIndex, maxLength)

    // Extract the longest palindromic substring from the original string
    const start = (centerIndex - maxLength) / 2;
    return str.substring(start, start + maxLength);
}


console.log(findManacher("bab"))