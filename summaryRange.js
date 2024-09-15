/**
 * Summary ranges
 * @param {*} nums 
 */


var summaryRanges = function(nums) {
    let isRange = false;
    let start = nums[0];
    let result = [];



    for(let i=0; i< nums.length; i++){

        if(nums[i]+1 == nums[i+1]){
            isRange = true;
        } else{
            isRange ? result.push(`${start}->${nums[i]}`) : result.push(`${nums[i]}`);
            isRange = false;
            start = nums[i+1];

        }
    }



    return result;
};
console.log(summaryRanges([0,1,2,4,5,7]))