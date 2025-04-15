var findMaximumXOR = function(nums) {

    let hashmap = new Map();

    var checkifexists = function(max){


        for(let num of nums){
            if(hashmap.has(max^num)){
                return [max^num, num]
            }

            hashmap.set(num, true)
        }
        return false;
    } 
    for(let i=31; i>=0; i--){

        let result = checkifexists(1<<i);

        if(result){
            return [...result]
        }
    }
};


console.log(findMaximumXOR([3, 10, 5, 25, 2, 8]))