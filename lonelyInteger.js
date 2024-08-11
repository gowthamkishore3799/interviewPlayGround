function lonelyinteger(a) {
    // Write your code here
    
    let result = 0;
    for(let num of a){
        result = result^num
    }
    
    return result;
}

console.log(lonelyinteger([1,2,3,4,3,2,1]))