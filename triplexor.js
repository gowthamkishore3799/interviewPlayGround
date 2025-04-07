var countTriplets = function(nums) {
    let count = 0;

    let pair = new Array(Math.pow(2,16)).fill(0);
    for(let i=0; i< nums.length; i++){
        for(let j=0; j< nums.length; j++){

            let num = nums[i] & nums[j];
            pair[num]++
        }
    }


    for(let i=0; i< pair.length; i++){
        for(let j= 0; j<nums.length; j++){
            if((nums[j] & i) == 0 && pair[i]>0){
                count= count + pair[i];
            }
        }
    }

    return count;
};

console.log(countTriplets([0,0,0]))