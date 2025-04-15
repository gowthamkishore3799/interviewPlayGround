const taskSchedulerTabulation = function(n, cost, time) {
    const maxFree = time.reduce((a, b) => a + b, 0);

    // Initialize dp table with Infinity
    const dp = Array.from({ length: n + 1 }, () =>
        new Array(maxFree + 1).fill(Infinity)
    );

    // Base case: no tasks left to do → cost is 0
    for (let f = 0; f <= maxFree; f++) {
        dp[n][f] = 0;
    }

    // Fill the table bottom-up
    for (let i = n - 1; i >= 0; i--) {
        for (let f = 0; f <= maxFree; f++) {
            // Option 1: run task[i] on paid server
            let takePaid = cost[i] + dp[i + 1][f + time[i]];

            // Option 2: run task[i] on free server (if free time available)
            let takeFree = f > 0 ? dp[i + 1][f - 1] : Infinity;

            dp[i][f] = Math.min(takePaid, takeFree);
        }
    }

    return dp[0][0];
};