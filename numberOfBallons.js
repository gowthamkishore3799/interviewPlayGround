var maxNumberOfBalloons = function(text) {
    let ballonHashMap = {
        "b": [],
        "a" : [],
        "l" : [],
        "o" : [],
        "n" : []
    }

    for(let i=0; i<text.length; i++){
        if(ballonHashMap[text[i]]){
            let arr = ballonHashMap[text[i]];
            arr.push(i);
            ballonHashMap[text[i]] = arr;
        }
    }

    console.log(ballonHashMap)


    let min = Number.MAX_SAFE_INTEGER;





    for(let [key, val] of Object.entries(ballonHashMap)){

        val = val.length;
        if(key == "l" || key == "o"){
            val = Math.floor(val/2);
        }




        min = Math.min(min, val);
    }


    return min != Number.MAX_SAFE_INTEGER ? min : 0;

     
};

console.log(maxNumberOfBalloons("loonbalxbalpoon"))


/**
 * go through each character of ballon and replace the text with empty string,
 * 
 * 
 * again do the loop, until you dont find the character
 * 
 * 
 * 
 * 
 * instead of that, lets keep the character position in array and do for loop.
 * 
 * every time, go throug ballon-o(n^2)
 * 
 * 
 * else, calculate the occurences of each character and find the minimum one, based on ballon
 * 
 * 
 * 
 * calculate the occurences based on text, and check if its n part of ballon and add it to hashmap.
 * 
 * 
 * { "b" : [], "a" : []}
 * 
 * we dont even need hashmap
 * 
 * 
 * just go through each character and store in the array based on index of ballon.
 * 
 * find the min.
 */