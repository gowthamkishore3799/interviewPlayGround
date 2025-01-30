function maxProfit(prices) {
    let i =0, j = i+1;

    let max = 0
    while(j<prices.length){



        if(prices[j] < prices[i]){
            i=j;
            j++;
        } else {
            max = Math.max(max, prices[j]-prices[i])
            j++;
        }
    }
    return max;
};


console.log(maxProfit([7,6,4,3,1]))