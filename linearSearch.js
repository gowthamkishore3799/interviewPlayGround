const linearSearch = (nums, k) =>{
    for(let num of nums){
        if(num == k){
            return true;
        }
    }
    return false;
}


console.log(linearSearch([9,10,2,4,5], 5))