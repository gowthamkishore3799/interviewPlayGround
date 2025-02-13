// var coinChange = function(coins, amount) {


//     if(amount == 0){
//         return 0;
//     }


//     let min = Number.MAX_SAFE_INTEGER;




//     var dfs = function(totalAmount, noOfCoins){


//         if(totalAmount == 0){
//             min = Math.min(min, noOfCoins)
//             return;
//         }


//         if(totalAmount <0){
//             return;
//         }




//         for(let i=0; i<coins.length; i++){
//             if(totalAmount-coins[i] < 0){
//                 continue;
//             }
//             dfs(totalAmount-coins[i], noOfCoins+1);
//         }


//     }

      


//     for(let i=0; i<coins.length; i++){
//         dfs(amount-coins[i], 1, coins[i]);
//     }


//     return min != Number.MAX_SAFE_INTEGER ? min : -1


// }

// var coinChange = function(coins, amount) {
//     if (amount === 0) {
//         return 0;
//     }

//     let min = Number.MAX_SAFE_INTEGER;
//     let dp = {}; // Memoization object

//     var dfs = function(totalAmount, noOfCoins) {
//         if (totalAmount === 0) {
//             min = Math.min(min, noOfCoins);
//             return;
//         }

//         if (totalAmount < 0) {
//             return;
//         }

//         // If already computed, return early
//         if (dp[totalAmount] !== undefined && dp[totalAmount] <= noOfCoins) {
//             return;
//         }

//         // Store the minimum coins needed for this amount
//         dp[totalAmount] = noOfCoins;

//         for (let i = 0; i < coins.length; i++) {
//             if (totalAmount - coins[i] >= 0) {
//                 dfs(totalAmount - coins[i], noOfCoins + 1);
//             }
//         }
//     };

//     for (let i = 0; i < coins.length; i++) {
//         dfs(amount - coins[i], 1);
//     }

//     return min !== Number.MAX_SAFE_INTEGER ? min : -1;
// };




function coinChange(coins, amount) {

    let dp = new Array(amount+1).fill(Infinity);

    dp[0] = 0




    for(let coin of coins){
        for(let i=coin; i<=amount; i++){
            dp[i] = Math.min(dp[i], dp[i-coin]+1)
        }
    }


    return dp[amount] != Infinity ? dp[min] : -1
}


console.log(coinChange([1,2,5], 7))


var coinChange = function(coins, amount) { 
    let result = countCoinChange(coins, amount)
    return result === Infinity ? -1 : result
};

const countCoinChange = (coins, amount, memo={}) => {
    if(amount === 0) return 0
    if(amount < 0) return Infinity
    // if(memo[amount] !== undefined) return memo[amount]

    let min = Infinity 

    for(let coin of coins) {
        const restAmount = amount - coin 
        min = Math.min(countCoinChange(coins, restAmount, memo) + 1, min) 
    }
    return min
}






3



2(1)



