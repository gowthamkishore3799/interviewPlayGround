var findClosestNumber = function(nums) {
    let min = Number.MAX_SAFE_INTEGER;
    let element = null;

    for(let num of nums){
        
        if(Math.abs(num) <= min){
            min = Math.abs(num);
            element = element>num && Math.abs(num) == Math.abs(element) ? element : num;
        }
    }
    return element;
};

console.log(findClosestNumber([2, -1, 1]))