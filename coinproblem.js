// var coinProblem = function(coins, target){

//     let dp = new Array(target+1).fill(Number.MAX_SAFE_INTEGER)
//     dp[0] = 0;


//     for(let i=0;i<dp.length; i++){
//         for(let coin of coins){
           

//             if(dp[i]!=Number.MAX_SAFE_INTEGER  && i+coin <= target){
//                 dp[i+coin] = Math.min(dp[i+coin], dp[i]+1)
//             }
            
//         }
//     }

//     return dp[dp.length-1] == Number.MAX_SAFE_INTEGER ? -1 : dp[dp.length-1]
// }



var coinProblem = function(coins, target){



    var dfs = function(money, memo={}){

        if(money == 0){
            return 0;
        }

        if(money<0){
            return null;
        }

        if(money in memo){
            return memo[money]
        }

        let minCoins = Infinity;

        for(let i=coins.length-1;i>=0; i-- ){
            let result  = dfs(money-coins[i], memo)
            if(result != null){
                minCoins = Math.min(minCoins, result+1)
            }
        }

        memo[money] = minCoins
        return minCoins;
    }


    return dfs(target);
}

console.log(coinProblem([1,2,5], 11))