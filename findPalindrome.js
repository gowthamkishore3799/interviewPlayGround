var longestPalindrome = function(s) {

    let processedString = `^#` + s.split("").join("#") + "#$"



    let p = Array(processedString.length).fill(0)
    let c=0, r=0

    for(let i=1; i<processedString.length; i++){

        let mirror = 2*c-i



       if(i<r){
            p[i] = Math.min(p[r-i], p[mirror])
       }





        while(processedString[i + 1 +p[i]] == processedString[i-1 - p[i]] && i+p[i]+1 < processedString.length && i-p[i]-1 >=0){
            p[i] = p[i]+1
        }


        if(i + p[i]>r){
            c = i;
            r = i+p[i]
        }




    }

    console.log(p)

}


console.log(longestPalindrome("babad"))