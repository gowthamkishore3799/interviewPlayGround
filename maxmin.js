function maxMin(k, arr) {
    // Write your code here


    arr.sort((a,b)=> a-b);

    let minFairness = Number.MAX_SAFE_INTEGER;


    for(let i =0, j = i+k-1; i<=arr.length-k && j<=arr.length-1; i++, j++){
        console.log()
       if( minFairness > arr[j]-arr[i]){
        minFairness =  arr[j]-arr[i]
       }
    }

    return minFairness

}


console.log(maxMin(3, [100, 200, 300, 350, 400,401, 402]));