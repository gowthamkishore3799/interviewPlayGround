var newArray = function(index){
    return Array.from({length:index}).fill(1);
}

var productExceptSelf = function(nums) {
    let right = newArray(nums.length);
    let left = newArray(nums.length);
    let sum = []


    for(let i=1; i< nums.length; i++){
        left[i] = left[i-1] * nums[i-1]

    }


    for(let i=nums.length-2; i>=0; i--){
        right[i] = right[i+1] * nums[i+1]

        console.log(right[i+1], nums[i+1])
    }



    for(let i =0; i< nums.length; i++){
        sum[i] = left[i] * right[i]
    }

    return sum;




};


console.log(productExceptSelf([1,2,3,4]))