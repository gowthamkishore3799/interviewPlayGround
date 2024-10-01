
/**
 * First find the min element index,
 * next find the second largest element
 * 
 * 
 * 
 * if  i< j :
 *  print i and increment i
 * else decrement j
 * 
 * 
 * @param {} nums 
 */


var sortedSquares = function(nums) {

    let result = [];
    let i=nums.length, j=nums.length-1;

    if(nums.length==1){
        return [nums[0]* nums[0]];
    }

    for(let k =0; k< nums.length; k++){

        if(nums[k]>=0){
            i=k;
            j=k-1;
            break;
        }
    }

    console.log(i, j)


    while(i<nums.length && j>=0){
        let numI = nums[i]* nums[i];
        let numJ = nums[j] * nums[j];




        if(numI< numJ){
            result.push(numI)
            i++;
        } else {
            result.push(numJ)
            j--
        }
    }


    if(j >=0){

        for(let k = j; k>=0; k--){
            let numJ = nums[k] * nums[k];
            result.push(numJ)
        }
    }


    if(i < nums.length){

        for(let k = i; k<nums.length; k++){
            let numI = nums[k] * nums[k];
            result.push(numI)
        }
    }

    return result;

    
};


console.log(sortedSquares([-2,0]))