function miniMaxSum(arr) {
    // Write your code here
    
    let min = arr[0], max = arr[0], sum = arr[0];
    
    
    for(let i=1; i<arr.length; i++){
        sum = sum + arr[i];
        
        
        if(arr[i] < min){
            min = arr[i];
        }
        
        
        if(arr[i] > max){
            max = arr[i]
        }
    }
    
    
    let maxSum = sum-min;
    let minSum = sum-max
    
    console.log(minSum+ " " + maxSum);

}
