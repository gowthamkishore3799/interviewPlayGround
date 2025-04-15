function stockPairs(stocksProfit, target) {
    console.log("Inside..")
    let hashMap = new Map();
    let includedProfits = new Map();
    let counter = 0;
    for(let val of stocksProfit){
       let diff = Math.abs(target-val)

       if(diff in hashMap){
        if(!(`${diff}$${val}` in includedProfits || `${val}$${diff}` in includedProfits)){
            counter++;
            includedProfits[`${diff}$${val}`] = true;
        }
       } else {
         hashMap[val] = true;
       }
    }


    return counter;



}

console.log(stockPairs([1,3,46,1,3,9], 3))
