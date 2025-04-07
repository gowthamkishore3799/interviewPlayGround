


function minAdditionalLatency(n, latency) {
    function dfs(i) {
        // Base case: if node is beyond n, it's a null child
        if (i >= n) return { maxLatency: 0, extra: 0 };

        const left = 2 * i + 1;
        const right = 2 * i + 2;

        const leftResult = dfs(left);
        const rightResult = dfs(right);

        const leftEdge = left < n ? latency[left - 1] : 0;
        const rightEdge = right < n ? latency[right - 1] : 0;

        const totalLeft = leftResult.maxLatency + leftEdge;
        const totalRight = rightResult.maxLatency + rightEdge;

        const added = Math.abs(totalLeft - totalRight);

        return {
            maxLatency: Math.max(totalLeft, totalRight),
            extra: leftResult.extra + rightResult.extra + added
        };
    }
    const result = dfs(0);
    return result.extra;
}
console.log(minAdditionalLatency(7, [3, 1, 2, 1, 5, 4]))