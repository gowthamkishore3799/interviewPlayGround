var numTilePossibilities = function(tiles) {
    let combinations = new Set();

    const dfs = (path, visited) => {
        for (let i = 0; i < tiles.length; i++) {
            if (visited[i]) continue;

            const next = path + tiles[i];
            combinations.add(next);

            visited[i] = true;
            dfs(next, {...visited}); // copy to avoid global mutation
            visited[i] = false; // optional due to copy, but helps if reused
        }
    };

    dfs("", {});
    return combinations.size;
};

console.log(numTilePossibilities("AAB"));  // Output: 8


console.log(numTilePossibilities("AAB"))