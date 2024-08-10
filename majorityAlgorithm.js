var majorityElement = function(nums) {
    let element = nums[0];
    let count = 1;


    for(let num of nums){
        if(num == element){
            count++;
        } else {
            count--;
        }



        if(count<0){
            element = num;
        }
    }

    return element;
};



console.log(majorityElement([3,2,3]))