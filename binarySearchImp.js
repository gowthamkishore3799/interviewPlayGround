/**
 * First try to find the element,  if element not found, loops fail
 * 
 * get the j, and compare if j<= target, 
 * 
 * and return the position accordingly....
 * @param {*} nums 
 * @param {*} target 
 */


var searchInsert = function(nums, target) {
    


    let i =0, j = nums.length-1;
    let mid;


    while(i<=j){
        mid = Math.floor((i+j)/2)
        if(nums[mid] == target){
            return mid;
        }



        if(nums[mid]> target){
          
            j = mid-1
        } else {
            console.log('else')
            i = mid+1;
        }

        
    }


    if(nums[0] > target){
        return 0;
    } else if(nums[nums.length-1] <= target){
        return  nums.length;
    } else {
        return j+1
    }



    
};



console.log(searchInsert([1,3,5,7], 0))