// var climbStairs = function(n, memo= {}) {


//     if(memo[n]){
//         return memo[n];
//     }


//     if(n==0 || n==1){
//         return 1;
//     }


//     if(n<0){
//         return 0;
//     }

//    memo[n] = climbStairs(n-1, memo) + climbStairs(n-2, memo);

//    return memo[n]
// };


var climbStairs = function(n){
    let dp = new Array(n).fill(0);

    dp [0] = 1;
    dp[1] = 2;


    for(let i=2;i<n; i++){
        dp[i] = dp[i-1] + dp[i-2];
    }


    return dp[n-1]




}

console.log(climbStairs(4));


