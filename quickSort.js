var quickSortAlg = (arr, low, high) =>{
    let pivot = arr[high];


    let i = low-1;



    for(let j =low; j<= high-1; j++){
        if(arr[j]< pivot){
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }

    [arr[i+1], arr[high]] = [arr[high], arr[i+1]]

    return i+1;

}

var quickSort = (nums, low, high) =>{
    if(low< high){
        let pivote = quickSortAlg(nums, 0, high);
        quickSort(nums, 0, pivote-1);
        quickSort(nums, pivote+1, high)
    }

    return nums
}


let nums = [10, 80, 30, 90, 40]

let length = nums.length-1;
console.log(quickSort(nums, 0, length))