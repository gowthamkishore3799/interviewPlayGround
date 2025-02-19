// var binarySearch= function(nums, i, j, target){

// }



var search = function(nums, target) {

    let i=0, j= nums.length-1;



    while(i<=j){

        let mid = Math.floor((i+j)/2);

        if(nums[mid]== target){
            return mid;
        }


        console.log


        if(nums[i] <= nums[mid]){
            if(target >= nums[i] && target<= nums[mid-1]){
                j = mid-1
            } else{
                i = mid+1
            }
        } else{
            if(target >= nums[mid+1] && target<= nums[j]){
                i = mid+1
            } else{
                j = mid-1
            }
        }
    }



    return -1;

};


console.log(search([4,5,6,7,8,1,2], 1));
// 1,2,4,5,6,7