const createNetworkGraph = function(networks, n){
    
    let networkGraph = new Array(n).fill(0).map(()=> new Array(n).fill(0))
    
    
    for(let network of networks){
        let [inbound, outbound, time] = network;
        networkGraph[inbound-1][outbound-1] = time;
    }
    
    
    return networkGraph
}


const traverseGraph = function(graph, k){

    /**
     * visited = graph.length
     * 
     * if not return -1
     * 
     * 
     * for loop, update the array
     * 
     * let visited = [];
     * let nodeDistance = {1: 0, 2:3}
     * 
     * find minDistance here and update as visited and delete from node distance....
     */

    let visited = {}
    visited[`${k-1}`] = 0;
    let currentNode = k-1;

    let nodeDistance = new Map();
    let nextNode = k;
    let minDistance = 0;
    let totalTime = 0;



    while(Object.keys(visited).length < graph.length){

        let min = Number.MAX_SAFE_INTEGER

        for(let i=0; i< graph[currentNode].length; i++){

            let val = graph[currentNode][i]

            if(val>0){
                let dis = visited[currentNode] + graph[currentNode][i]
                nodeDistance.set(i, dis);
            }
            
        }

        if(nodeDistance.length<=0){
            return -1;
        }


        for(let node of nodeDistance.keys()){

            let distance = nodeDistance.get(node)
            if(nodeDistance.get(node) < min){
                min = distance;
                nextNode = node;
            }
        }
        console.log(currentNode, "Current node")


        nodeDistance.delete(nextNode);
        currentNode = nextNode;
        visited[`${currentNode}`] = min;
        totalTime = min
    }

    return totalTime
}


var networkDelayTime = function(times, n, k) {
    
    
    const graph = createNetworkGraph(times, n);
    

    const minDistance = traverseGraph(graph, k)

    console.log(minDistance)
};

console.log(networkDelayTime([[2,1,1],[2,3,1],[3,4,1]],  4, 2))
/**
 * I think of 
 */