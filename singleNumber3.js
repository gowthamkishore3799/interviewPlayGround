var singleNumber = function(nums) {
    let result = 0


    for(let num of nums){
        result^= num
    }


    let rightMostBit = result & ~(result-1);


    let x=0, y=0;

    for(let num of nums)

        if((rightMostBit & num) !== 0) x ^= num // XOR because the duplicate will cancel out 
        else y ^= num;
    


    return [x,y]
    

};


console.log(singleNumber([1,1,2,2,3,5]))