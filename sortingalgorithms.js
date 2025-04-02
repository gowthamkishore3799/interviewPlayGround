
const Bubble = function(nums){
    /**
     * Always place the max element at last:
     * 
     */

    let n = nums.length;

    for(let i=0; i<n-1; i++){
        for(let j = i; j<n-i-1; j++){


            if(nums[j] > nums[j+1]){
                [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
            }
        }
    }

    return nums;
}

const selectionsort = function(nums){


    let n = nums.length;

    for(let i=0; i< n-1; i++){
        let min = i
        for(let j=i; j < n; j++){
            if(nums[j] < nums[min]) {
                min = j
            }
        }

        if(min != i){
            [nums[min], nums[i]] = [nums[i], nums[min]]
        }
    }

    return nums
}


const insertionSort = function(nums){



    for(let i=1; i< nums.length;i++){


        let j = i-1;
        let val = nums[i]

        while(j>=0 && nums[j] > val){

              nums[j+1]=nums[j]
              j = j-1;
        }

        nums[j+1] = val
    }

    return nums
}

const quickSortalgo = function(nums, low, high){
    let pivot = nums[low];
    let i = low+1;


    for(let j=low+1; j< high; j++){

        if(nums[j]<pivot){
            [nums[j], nums[i]] = [nums[i], nums[j]]
            i++;
        }
    }


    i = i-1;

    [nums[low], nums[i]] = [nums[i], nums[low]]

    return i;
}

const quicksort = function(nums, low, high){


    if(low<=high){
        const pivot = quickSortalgo(nums, low, high)


    quicksort(nums, 0, pivot-1)
    quicksort(nums, pivot+1, high)
    }

    return nums;
}


const mergeSort = function(nums) {
    if (nums.length <= 1) {
        return nums;
    }

    let mid = Math.floor(nums.length / 2);

    let leftArr = mergeSort(nums.slice(0, mid));
    let rightArr = mergeSort(nums.slice(mid));

    return merge(leftArr, rightArr);
};

const merge = function(leftArr, rightArr) {
    let result = [];
    let i = 0, j = 0;

    while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] < rightArr[j]) {
            result.push(leftArr[i]);
            i++;
        } else {
            result.push(rightArr[j]);
            j++;
        }
    }

    // Concatenating the remaining elements
    return [...result, ...leftArr.slice(i), ...rightArr.slice(j)];
};


const determineTypeofSort = function(type){
    switch (type) {
        case "bubble":
            return Bubble;
        case "selection":
            return selectionsort
        case "insertion":
            return insertionSort
        case "quicksort":
            return quicksort
        case "merge":
            return mergeSort
        default:
            console.log("Invalid sort")
            throw new Error("Error in finding sorting algorithms")
    }
}



const sort = function(nums){
    const sortingAlgorithms = determineTypeofSort("merge");

    return sortingAlgorithms(nums, 0, nums.length-1)
}

console.log(sort([4,2,1, 3,4]))