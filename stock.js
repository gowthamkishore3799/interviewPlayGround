

function stockPairs(stocksProfit, target) {

    let hashMap = new Map();
    let pair = 0;



    for(let i=0; i<stocksProfit.length; i++){


        let diff = target-stocksProfit[i];

       
        


        if(hashMap.has(diff)){

            console.log(diff, "4", hashMap.has(diff), !hashMap.has(stocksProfit[i]), hashMap)

            if(hashMap.has(diff) && !hashMap.has(stocksProfit[i])){
                console.log(diff, stocksProfit[i])
                pair++;
            }


            hashMap.set(diff, false)
            hashMap.set(stocksProfit[i], false)

        } else{
            hashMap.set(stocksProfit[i], i)
        }
    }

    return pair

}

console.log(stockPairs([5,7,9,13,11,6,6,3,3], 12))