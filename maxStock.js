var maxProfit = function(prices) {
    let i =0;
    let j = i+1;
    let max = 0;

    while(j< prices.length){


        if(prices[i]> prices[j]){
            i = j;
            j = i+1;
        } else {
            max = Math.max(max, prices[j]-prices[i])
            j++;
        }

    }
    return max;
};


console.log(maxProfit([7,6,4,3,1]))