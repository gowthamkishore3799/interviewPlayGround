var convertMaxNumber = function(nums){
    nums.sort((a,b)=> a-b)


    let i =0, j = nums.length-1;
    let counter = 0;

    console.log(nums, "Nums..")


    while(counter<3 && j>0){
        nums[j] = nums[i];
        j--;
        counter++;
    }

    console.log(nums)



    let minDiff = nums[j]-nums[i]
    return minDiff;
}

var convertMinNumber = function(nums){
    nums.sort((a,b)=> a-b)


    let i =0, j = nums.length-1;
    let counter = 0;


    while(counter<3 && j>0){
        nums[j] = nums[i];
        j--;
        counter++;
    }

    console.log(nums)



    let minDiff = nums[j]-nums[i]
    return minDiff;
}

var minDifference = function(nums) {
    
};

console.log(minDifference( [6,6,0,1,1,4,6]))

/**
 * Logic i could think is min and max
 * 
 * take max value and convert to min
 * 
 * take 3 max values and convert to min values and subtract it?:::
 * 
 * First sort the element
 * i =0, j=nums.length-1
 * 
 * 
 * convert to min and j--
 * 
 * while(j>= j-3 && j>=0){
 * 
 * replace the value with min
 * }
 */