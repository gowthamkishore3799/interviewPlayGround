function balancedSums(arr ) {
    const sum = arr.reduce((total, el) => total + el, 0);
    
    let sumLeft = 0, sumRight = sum;
    for(let i = 0; i < arr.length; i++) {
        sumRight -= arr[i];
        console.log(sumLeft, sumRight)
        if (sumLeft === sumRight) {
            return "YES";
        }
        sumLeft += arr[i];
    }
    
    return "NO";
}

console.log(balancedSums([5,10,12, 15, 20]))