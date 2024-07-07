var swap = (nums, i, j) =>{
    [nums[i], nums[j]] = [nums[j], nums[i]]
}


var selectionSort = (nums) =>{
    for(let i=0; i<nums.length-1; i++){
        let minIndex = i
        for(let j = i+1; j<nums.length; j++){
            if(nums[j]< nums[minIndex]){
                minIndex = j
            }
        }
        swap(nums, minIndex, i)
    }
    return nums
}


console.log(selectionSort([3,5,1,40, 20]));