function getMatrixSize(maze) {
    return [maze.length - 1, maze[0].length - 1];
}

function getMinimumMoves(maze, k) {
    let [n, m] = getMatrixSize(maze);

    // If the start or end is blocked, no valid path exists
    if (maze[0][0] === 1 || maze[n][m] === 1) {
        return -1;
    }

    let queue = [[0, 0, 0]]; // BFS queue: [row, col, currentJumpCount]
    let visited = Array.from({ length: n + 1 }, () => Array(m + 1).fill(false));

    visited[0][0] = true;

    while (queue.length > 0) {
        let [i, j, currentJump] = queue.shift();

        // Check if we've reached the bottom-right corner
        if (i === n && j === m) {
            return currentJump;
        }

        // Explore possible jumps to the right
        for (let jumpPos = 1; jumpPos <= k; jumpPos++) {
            let jumpCol = j + jumpPos;
            if (jumpCol > m || maze[i][jumpCol] === 1) {
                break; // Stop jumping in this direction if out of bounds or obstacle
            }
            if (!visited[i][jumpCol]) {
                visited[i][jumpCol] = true;
                queue.push([i, jumpCol, currentJump + 1]);
            }
        }

        // Explore possible jumps downwards
        for (let jumpPos = 1; jumpPos <= k; jumpPos++) {
            let jumpRow = i + jumpPos;
            if (jumpRow > n || maze[jumpRow][j] === 1) {
                break; // Stop jumping in this direction if out of bounds or obstacle
            }
            if (!visited[jumpRow][j]) {
                visited[jumpRow][j] = true;
                queue.push([jumpRow, j, currentJump + 1]);
            }
        }
    }

    // Return -1 if there's no valid path to the bottom-right corner
    return -1;
}

// Test cases
console.log(getMinimumMoves([[1,0], [0,0]], 5)); // Expected output: -1 (start blocked)
// console.log(getMinimumMoves([[0,0], [0,1]], 5)); // Expected output: -1 (end blocked)
// console.log(getMinimumMoves([[0,0], [0,0]], 5)); // Expected output: 2 (reachable with 2 jumps)
// console.log(getMinimumMoves([[0,1,0], [0,0,0]], 2)); // Expected output: 3 (reachable with 3 moves)
