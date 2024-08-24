var maxProfit = function(prices) {

    let sum = 0, max = 0;
    let i =0, j= i+1
    while(j<prices.length){
        if(prices[i] > prices[j]){
            i=j;
            j= i+1;
            max = prices[j]
        } else if(prices[j]> max){
            j++;
        } else{
            sum = sum + (max-prices[i]);
            i= j;
            j = i+1;
            max = prices[j]
        }
    }

    return sum;
};


var maxPr




/**
 * Case i:
 *
 *   i=0, j=i+1
 * 
 * 
 * max = 5,
 * j< max and max-i > j
 * 
 * sum = sum + (diff)
 * 
 * 
 * 
 *       
 * 
 * 
 * 
 * 
 */


console.log(maxProfit([3,2,6,5,0,3]))


