var insertionSort = (nums)=>{
    /**
     * Insertion sort starts with i=1, compares the below elments, and takes the min element and places the element in place....
     */
    for(let i=1; i<nums.length; i++){
        

        let j = i-1;
        let key = nums[i]

        while(j>=0 && nums[j]> key){
            nums[j+1] = nums[j]

            j = j-1
        }

        nums[j+1] = key
    }

    return nums
}


console.log(insertionSort([3,5,1,40, 20]))