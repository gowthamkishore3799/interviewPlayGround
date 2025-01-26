function maxPassengers(mat) {
    const n = mat.length;
    const m = mat[0].length;

    // Memoization table to store results of subproblems (x, y, direction)
    const memo = {};

    // Helper function to check if a position is valid
    function isValid(x, y) {
        return x >= 0 && x < n && y >= 0 && y < m && mat[x][y] !== -1;
    }

    // DFS function for exploring paths to the railway station and back
    function dfs(x, y, direction, collectedPassengers) {
        // Base case: out of bounds or blocked cell
        if (!isValid(x, y)) return collectedPassengers;

        // If the memo table has already computed the result for this state
        if (memo[`${x},${y},${direction}`] !== undefined) {
            return collectedPassengers + memo[`${x},${y},${direction}`];
        }

        // Collect the passenger if we are on a passenger cell
        let newPassengers = collectedPassengers;
        if (mat[x][y] === 1) {
            newPassengers++;
            mat[x][y] = 0;  // Mark the cell as empty after collecting the passenger
        }

        let maxPassengers = newPassengers;

        if (direction === 'to_station') {
            // Move right or down towards the station
            if (isValid(x, y + 1)) {
                maxPassengers = Math.max(maxPassengers, dfs(x, y + 1, 'to_station', newPassengers));
            }
            if (isValid(x + 1, y)) {
                maxPassengers = Math.max(maxPassengers, dfs(x + 1, y, 'to_station', newPassengers));
            }
        } else {
            // Move left or up on the way back
            if (isValid(x, y - 1)) {
                maxPassengers = Math.max(maxPassengers, dfs(x, y - 1, 'to_return', newPassengers));
            }
            if (isValid(x - 1, y)) {
                maxPassengers = Math.max(maxPassengers, dfs(x - 1, y, 'to_return', newPassengers));
            }
        }

        // Memoize the result for this state
        memo[`${x},${y},${direction}`] = maxPassengers - newPassengers;
        return maxPassengers;
    }

    // Start DFS from the starting point (0, 0) with the direction 'to_station'
    const passengersToStation = dfs(0, 0, 'to_station', 0);

    // After reaching the station, we need to return to (0, 0)
    const passengersBack = dfs(n - 1, m - 1, 'to_return', passengersToStation);

    return passengersBack;
}

// Test cases

const mat1 = [
    [0, 0, 0, 1],
    [1, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];

console.log(maxPassengers(mat1)); // Output: 2

const mat2 = [
    [0, 1, -1],
    [1, 0, -1],
    [1, 1, 1]
];

console.log(maxPassengers(mat2)); // Output: 5
