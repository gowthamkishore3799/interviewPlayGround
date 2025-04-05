const findheuristics = function(word){
    let hashmap = new Map();
    for(let i=0; i<word.length; i++){
        let char = word[i]

        if(!hashmap.has(char)){
            hashmap.set(char, i)
        }
        
    }

    return hashmap;
}


const stringMatching = function(str1, str2){

    let heuristics = findheuristics(str2);

    let i=0; k = str2.length-1


    while(i<=str1.length-str2.length){



        let j = i+str2.length-1;



        while(j>=0){
            if(str1[j] == str2[k]){
                k--;
                j--


                if(k<0){
                    return j+1;
                }
    
            } else{

                if(heuristics.has(str1[j])){
                    i = j-heuristics.get(str1[j]);
                    j = i+str2.length-1;
                    k = str2.length-1
                }else{
                    i = j+1
                    j = i+str2.length-1
                    k = str2.length-1
                }
            }
        }

        
    }


}


console.log(stringMatching("ABCDFABCDE", "ABCDE"))



// 11-6
// {
//     A: 1
//     B: 2
//     C: 3
//     D: 4
//     e:5
// }


// ABADE
// XASDA
// while(i<str1.length-str2.length)




//     let j = i

//     while(j<i+str2.length){
//         if(str1[2] == str1){
//             increment
//         } else{
//             //Do we have str1 in hashmap


//             if(heuris(str1[j])){
//                 i = locationofi
//             } else{
//                 i = j+1;
//             }
//                 //if present, move i index to i+
//         }
//     }

//     return j
// }
