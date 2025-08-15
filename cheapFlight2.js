var findCheapestPrice = function(n, flights, src, dst, k) {

    const adj = new Map();
    for (const flight of flights) {
        if (!adj.has(flight[0])) {
            adj.set(flight[0], []);
        }
        adj.get(flight[0]).push([flight[1], flight[2]]);
    }

    console.log(adj)



    const pq = [[0, src, 0]];

    while(pq.length> 0){

        pq.sort((a, b)=> a[0]-b[0]);
    

        console.log(pq, "PQ..")
        let [cost, node, steps] = pq.shift();
        if(node == dst && steps == k+1){
            console.log(cost, "Cist")
            return cost;
        }

        if(steps >= k+1){
            continue;
        }

        

        for(let neighbors of adj.get(node)){

            pq.push([cost+neighbors[1], neighbors[0], steps+1]);
        }
    }
}


const result = findCheapestPrice(3, [[0,1,100],[1,2,100],[0,2,500]], 0, 2, 0);
console.log(result)