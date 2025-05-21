function largestRectangleArea(heights) {
    let stack = [];
    let maxArea = 0;

    for (let i = 0; i <= heights.length; i++) {
        let currentHeight = (i === heights.length) ? 0 : heights[i];

        while (stack.length > 0 && currentHeight < heights[stack[stack.length - 1]]) {
            let height = heights[stack.pop()];
            let width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }

        stack.push(i);
    }

    return maxArea;
}

// Test Case
console.log(largestRectangleArea([2, 1, 5, 6, 2, 3])); // Output: 10

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]))