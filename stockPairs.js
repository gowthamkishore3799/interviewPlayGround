function stockPairs(stocksProfit, target) {

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
         hashMap[diff] = true;
       }
    }

    console.log(counter)

    return counter;



}

console.log(stockPairs[5,7,9,13,11,6,6,3,3], 12)
