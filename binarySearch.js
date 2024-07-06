const binarySearch = (nums, k) =>{
    let left = 0, right = nums.length-1



    while(left<=right){

        mid = Math.floor((right+left)/2);
        if(nums[mid] == k){
            return mid;
        }


        if(nums[mid] > k){
            right = mid-1;
        } else {
            left = mid+1
        }
    }

    return -1
}

console.log(binarySearch([1,2,3,4,5,6], 100))