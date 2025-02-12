var cloneGraph = function(node) {

    let visited = new Map();


    var dfs = function(node){

        if(!node){
            return null
        }


        if(vistied[node?.val]){
            return visited[node?.val]
        }


        let root = new Node(node?.val)
        visited.set(node.val, root);


        for(let neighbour of neighbours){
            root.neighbours.push(dfs(neighbour))
        }

        return root
    }



    dfs(root);
};