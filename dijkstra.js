const dijkstra = function() {
    const INF = Infinity;
    
    // Adjacency matrix representation of the graph.
    // Use INF for no direct edge.
    let graph = [
        [0,    10,   INF,  5,   INF],
        [INF,  0,    1,    2,   INF],
        [INF,  INF,  0,    INF, 4],
        [INF,  3,    9,    0,   2],
        [7,    INF,  6,    INF, 0]
    ];

    let startNode = 0;
    let visited = {};

    let distance = new Array(graph.length).fill(INF);
    distance[startNode] = 0;

    // List of all nodes (indices)
    const nodes = [];
    for (let i = 0; i < graph.length; i++) {
        nodes.push(i);
    }

    while (nodes.length) {
        // Sort nodes based on current shortest distance
        nodes.sort((a, b) => distance[a] - distance[b]);
        let currentNode = nodes.shift();

        visited[currentNode] = true;

        // Update distances for neighbors of currentNode
        for (let i = 0; i < graph[currentNode].length; i++) {
            // Skip if node is already visited or there is no edge.
            if (visited[i] || graph[currentNode][i] === INF) continue;
            
            let newDist = distance[currentNode] + graph[currentNode][i];
            if (newDist < distance[i]) {
                distance[i] = newDist;
            }
        }
    }

    return distance;
}

console.log(dijkstra());
