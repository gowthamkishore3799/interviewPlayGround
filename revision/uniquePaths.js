function uniquePaths(m, n) {
    


    let memo = {};



    var dfs = function(i, j){



        if(memo[`${i}#${j}`]){
            console.log("ath match")
            return memo[`${i}#${j}`]
        }
        if(i>=m || j >=n){
            return 0;
        }


        if(i== m-1 && j == n-1){
            return 1;
        }


        memo[`${i}#${j}`] = dfs(i+1, j) + dfs(i, j+1)
        return memo[`${i}#${j}`];
    }

    let noOfWays = dfs(0,0)

    return noOfWays
};



console.log(uniquePaths(3,2))