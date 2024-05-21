var containsDuplicate = function(nums) {
    const hashMap = new Map();
    for(let num of nums){


        if(hashMap.has(num)){
            return true
        }


        hashMap.set(num, true)
    }

    return false
};



console.log(containsDuplicate([1,2,3,1]))