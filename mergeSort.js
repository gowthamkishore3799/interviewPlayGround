var mergeSort = (nums) =>{

    if(nums.length<=1){
        return nums;
    }

    const mid = Math.floor(nums.length / 2);
    const left = nums.slice(0, mid);
    const right = nums.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
    
}


var merge = (leftArray, rightArray) =>{

    let result = [];
    let leftIndex = 0, rightIndex = 0;


    while(leftIndex < leftArray.length && rightIndex < rightArray.length){

        if(leftArray[leftIndex] < rightArray[rightIndex]){
            result.push(leftArray[leftIndex])
            leftIndex++;
        } else {
            result.push(rightArray[rightIndex])
            rightIndex++;
        }
    }

    return result.concat(leftArray.slice(leftIndex), rightArray.slice(rightIndex))
}


console.log(mergeSort( [3, 6, 8, 10, 1, 2, 1]))