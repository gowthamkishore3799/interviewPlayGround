var maxProfit = function(prices) {
    const memo = {};

    const dfs = (i, j, noOfTransaction) => {
        if (noOfTransaction <= 0 || j >= prices.length || i >= prices.length) return 0;

        const key = `${i}#${j}#${noOfTransaction}`;
        if (memo[key] !== undefined){
            return memo[key];
        }

        let res = 0;

        if (prices[j] > prices[i]) {
            let sell = (prices[j] - prices[i]) + dfs(j + 1, j + 2, noOfTransaction - 1);
            let skip = dfs(i, j + 1, noOfTransaction);
            res = Math.max(sell, skip);
        } else {
            res = dfs(i, j + 1, noOfTransaction);
            res = Math.max(res, dfs(j, j + 1, noOfTransaction));  
        }

        memo[key] = res;
        return res;
    };

    return dfs(0, 1, 2);
};