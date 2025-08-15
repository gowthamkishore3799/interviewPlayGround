const checkMinCharacter = function(str){


    if(str.length == 0){
        return -1;
    }


    let alphebets = new Array(26).fill(0);


    for(let i =0;i<str.length; i++){
        let index = str.charCodeAt(i) - "a".charCodeAt(0);
        alphebets[index] = alphebets[index] +1;
    }

    for(let i=0; i< str.length; i++){
        let index = str.charCodeAt(i) - "a".charCodeAt(0);
        if(alphebets[index] ==1){
            return i
        }
    }

    return -1;
}


const result = checkMinCharacter("leetcode")
console.log(result, "Result")