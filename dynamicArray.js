function dynamicArray(n, queries) {
    // Write your code here
    
    
    let arr = Array.from({length: n});

    let idx = null, lastAnswer = 0, newArray = [];
    
    
    
    for(let i = 0; i< queries.length; i++){
        let [query, x, y] = queries[i];
        
        idx = (x ^ lastAnswer) % n;
        
        if(query == 1){
            let result = arr.length && Array.isArray(arr[idx]) ? arr[idx] : [];
            result.push(y)
            arr[idx] = result;
        } else {
            lastAnswer = arr[idx][y%(arr[idx].length)];
            newArray.push(lastAnswer);
        }
    }
    return newArray;


}

console.log(dynamicArray(2, [[1,0, 5]]))