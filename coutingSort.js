function countingSort(arr) {
    /**
     * In the problem, 100 is the length
     */

    const maxElement = Math.max(arr);




    const newArray = Array.from({length:4}).fill(0);


    for(let num of arr){
        newArray[num] = (newArray[num] ?? 0) +1;
    }

    return newArray;
}


console.log(countingSort([1,1,3,2,1]))


