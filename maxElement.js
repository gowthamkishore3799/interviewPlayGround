function maxElement(n, maxSum, k) {
    // Helper to calculate sum of elements with `peak` at index k
    const getSum = (peak) => {
        let left = Math.max(peak - 1, 0);
        let right = Math.max(peak - 1, 0);
        
        // sum of decreasing values to the left of k
        if (left >= k) {
            const leftCount = k;
            const leftSum = (left + (left - k + 1)) * leftCount / 2;
            left = leftSum;
        } else {
            const leftSum = (left + 1) * left / 2;
            left = leftSum + (k - left);
        }

        // sum of decreasing values to the right of k
        if (right >= n - k - 1) {
            const rightCount = n - k - 1;
            const rightSum = (right + (right - rightCount + 1)) * rightCount / 2;
            right = rightSum;
        } else {
            const rightSum = (right + 1) * right / 2;
            right = rightSum + ((n - k - 1) - right);
        }

        return left + right + peak;
    };

    // Binary Search
    let low = 1, high = maxSum, answer = 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const sum = getSum(mid);

        if (sum <= maxSum) {
            answer = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return answer;
}


console.log(maxElement(445, 488, 1))