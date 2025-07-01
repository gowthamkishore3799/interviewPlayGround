/**
 * First build the graph using adjList
 *
 * 1. For each node, have a sum
 */

function constructTree(node, child, tree){
    childs = tree.get(node)|| [];
    childs.push(child);
    tree.set(node, childs)
}

function buildTree(treeNodes){
    let tree = new Map();
    for(let nodes of treeNodes){
        let [node1, node2] = nodes;
        constructTree(node1, node2, tree);
        constructTree(node2, node1, tree);
    }
    return tree;
}

function determineMaxDistance(tree, weights){

    let maxDistance = 0;
    function dfs(node, parent, visited, distance){

        //  node =1, distance = 1,  visited={1},
        // node = 2, distance = 3, visited = {1,2}
        // node = 3, distance = 6, visited = {1,2,3}

        //Visiting parent before maxLength & after maxLength;


        distance += weights[node-1];    // 1, 3, 9
        visited.set(node, true); // 1, 2, 3
        for(let neighbor of tree.get(node)){  
            if(visited.has(neighbor) && neighbor == parent && visited.size == 3){ // 1
                console.log(maxDistance, distance,  "Distance", parent, neighbor, visited, node)
                maxDistance = Math.max(maxDistance, distance);
                return;
            }
            if(!visited.has(neighbor)){
                dfs(neighbor, parent, visited, distance) //2 // 3
                visited.delete(neighbor);
            }
        }
        return;
    }


    for(let node of tree.keys()){
        dfs(node, node, new Map(), 0) // 1
    }

    console.log(maxDistance)
    return maxDistance;
}


function findMaxDistance(treeNodes, weights){
    let tree = buildTree(treeNodes);
    let maxDistance = determineMaxDistance(tree, weights) || -1;
    return maxDistance;
}



let treeNodes = [
  [1, 2],
  [2, 3],
  [3, 1],
  [4, 5],
  [1, 4],
];
let weights = [1, 2, 3, 4, 5];
let result = findMaxDistance(treeNodes, weights);
console.log(result);
