var maximumProduct = function(nums) {
    /**
     first approach is brute force
     three positivr number
**/
    
    let max = Number.MIN_SAFE_INTEGER;

    
    // for(let i=0; i<nums.length-2; i++){
    //     for(let j =i+1; j<nums.length-1; j++){
    //         for(let k=j+1; k< nums.length; k++){
                
    //             console.log(i, j, k)
    //             max = Math.max(max, nums[i] * nums[j] * nums[k])
    //         }
    //     }
    // }
    // console.log(max)
    // return max;
    

    nums = nums.sort((a,b)=> a-b)

    console.log(nums);

    for(let i =0; i< nums.length-2; i++){

        let j = i+1, k = nums.length-1;

        while(j<k){

            let sum = nums[i] * nums[j] * nums[k];
            max = Math.max(sum, max);


            if(nums[j] < nums[k]){
                j++;
            } else{
                k--;
            }
        }
    }

    return max
    
    
};

console.log(maximumProduct([-9, -5, 5, 1,2,3,4]))