var rotate = function(nums, k) {


    const reverse = function(arr, i, j){

        while(i<j){
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--
        }
    }

    reverse(nums, 0, nums.length-1)


    reverse(nums, 0, k-1);
    reverse(nums, k, nums.length-1);

    return nums
};



console.log(rotate([1,2,3,4,5,6,7], 3))