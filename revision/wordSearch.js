var buildHashMap = function(board) {
    let hashMap = new Map();

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            let char = board[i][j];
            if (!hashMap.has(char)) {
                hashMap.set(char, []);
            }
            hashMap.get(char).push([i, j]);
        }
    }

    return hashMap;
};

var isAdjacent = function(x, y, prevPos) {
    if (!prevPos) return true;

    const [prevX, prevY] = prevPos;
    const diffX = Math.abs(x - prevX);
    const diffY = Math.abs(y - prevY);

    // Check if the move is adjacent (horizontal or vertical)
    return (diffX === 1 && diffY === 0) || (diffX === 0 && diffY === 1);
};

var dfs = function(word, index, wordPosition, visited, prevPos) {
    if (index === word.length) return true;

    const char = word[index];
    const occurrences = wordPosition.get(char);

    for (let [x, y] of occurrences) {
        if (!isAdjacent(x, y, prevPos)) continue;

        const key = `${x}#${y}`;
        if (visited[key]) continue;

        visited[key] = true;
        const result = dfs(word, index + 1, wordPosition, visited, [x, y]);

        if (result) return true;
        visited[key] = false; // Backtrack
    }

    return false;
};

var exist = function(board, word) {
    const wordHashMap = buildHashMap(board);

    for (let [x, y] of wordHashMap.get(word[0]) || []) {
        const visited = {};
        visited[`${x}#${y}`] = true;
        
        if (dfs(word, 1, wordHashMap, visited, [x, y])) {
            return true;
        }
    }

    return false;
};

console.log(exist([["A","B","C","E"], ["S","F","C","S"], ["A","D","E","E"]], "AB")); // true
