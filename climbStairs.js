// var climbStairs = function(n){


//     var dfs = function(index, memo = {}){
//         if(n == index){
//             return 1;
//         }

//         if(index in memo){
//             console.log("inside")
//             return memo[index];
//         }

//         if(index>n){
//             return 0;
//         }
        
//         memo[index] = dfs(index+1, memo) + dfs(index+2, memo);

//         return memo[index];
//     }
    
    
//     return dfs(0, {});
// }




var climbStairs = function(n){

    let dp = new Array(n+1).fill(0)

    dp[1] = 1
    dp[2] = 2


    for(let i=3; i<=n; i++){
        dp[i] = dp[i-1] + dp[i-2]
    }

    console.log(dp[n])

    return dp[n]
}


console.log(climbStairs(35))