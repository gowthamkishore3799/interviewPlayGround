var createAdjList = function(edges){
    let adjList = new Map();
    for(let [root, child] of edges){
        adjList.set(root, (adjList.get(root) || new Set()).add(child))
        adjList.set(child, (adjList.get(child) || new Set()).add(root))
    }
    return adjList;
}




var findMinHeightTrees = function(n, edges) {


    var dfs = function(node, visited){
        visited[node] = true;
        let childNodes = adjList.get(node);

        let maxHeight = Number.MIN_SAFE_INTEGER;

        for(let child of childNodes){

            if(visited[child]){
                continue;
            }
            maxHeight = Math.max(maxHeight, 1 + dfs(child, visited))
        }
        return maxHeight == Number.MIN_SAFE_INTEGER ? 0 : maxHeight;
    }

    if(edges.length == 0){
        return [0]
    }
    let adjList = createAdjList(edges);
    let nodes = adjList.keys();
    let minHeight = Number.MAX_SAFE_INTEGER;
    let result = [];
    for(let node of nodes){
        let height = dfs(node, {})

        console.log(height)


        if(height == minHeight){
            result.push(node)
        }
        else if(height < minHeight){
            result = [];
            result.push(node);
            minHeight = height
        }


    }
    return result
};

console.log(findMinHeightTrees( 6, [[3,0],[3,1],[3,2],[3,4],[5,4]]))


console.log(findMinHeightTrees( 6, [[0,1],[0,2],[0,3],[3,4],[4,5]]))
