function findAdjacent(arr){


    let leftSmaller =Array.from({length: arr.length});
    let rightSmaller = Array.from({length: arr.length});


    for(let i=0; i< arr.length; i++){

        leftSmaller[i] = Math.min(arr[i], leftSmaller[i-1] || Number.MAX_SAFE_INTEGER)
    
    }

    for(let j=arr.length-1; j>=0 ; j--){
        rightSmaller[j] = Math.min(arr[j], rightSmaller[j+1] || Number.MAX_SAFE_INTEGER)
    

    }
    let maxMin = Number.MAX_SAFE_INTEGER;

    for(let i=0; i< arr.length; i++){
        let min = Number.MAX_SAFE_INTEGER;

        min = Math.min(min, Math.abs(arr[i]-leftSmaller[i]), Math.abs(arr[i] - rightSmaller[i]));

        maxMin = Math.min(min, maxMin)
    }

    return maxMin;



    
}

console.log(findAdjacent([1,4,5]));