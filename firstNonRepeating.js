
function firstNonRepeating(nums){


    const hashmap = new Map();


    for(let num of nums){
        hashmap.set(num, (hashmap.get(num) || 0) +1);
    }

    console.log(hashmap)

    for(let num of nums){
        if(hashmap.get(num)==1){
            return num;
        }
    }
}





console.log(firstNonRepeating([4, 5, 1, 2, 1, 5, 4]))