// var createFlightPaths = function(flights){
//     const flightTravesal = {}, cost = {};

//     for(let i =0; i< flights.length; i++){
//         const [src, dest, flightCost] = flights[i];

//         const currentFlightPaths = flightTravesal[src] || []
//         currentFlightPaths.push(dest);
//         flightTravesal[src] = currentFlightPaths;

//         cost[src] = {
//             ...cost[src],
//             [dest] : flightCost,
//         }
//     }

//     return {cost, flightTravesal};
// }

// const findFlights = function(src, dest, k, currentFlightPaths){
//     const {cost, flightTravesal} = currentFlightPaths

//     console.log(cost, "Cost")


//     let minCost = Number.MAX_SAFE_INTEGER // Are there fpr sure flights;

//     function flightPaths(src, dest, totalCost, stops){

//         if(stops >= k+1 && src != dest){
//             return;
//         }


//         if(src == dest && stops <= k+1){
//             minCost = Math.min(totalCost, minCost)
//             return;
//         }

//         const flights = flightTravesal[src] || []; // 1 , [2,3]

//         if(!flights){
//             return;
//         }

//         for(let flight of flights){
//             flightPaths(flight, dest, totalCost+cost[src][flight], stops+1);// 1, 3, 100,1 --> 3,3 , 700, 
//         }
//     }

//     flightPaths(src, dest, 0, 0)

//     return minCost
// }


// var findCheapestPrice = function(n, flights, src, dst, k) {
    

//     /**
//     Recursion
//     DG
//     Dijkstra algorithm....
//      */

//     /**
//      * 1. Dijkstras algorithm
//      * 2. from 0, start with dfs
//      * 
//      * 1. Create adjList
//      * 
//      * {0:  [1],
//      * 1: [2,3],
//      *2: [3]}


//      From 0-> 1-> 2 (more thna one stop return
//      )
//      From 0->1->3 (one stop min value) => minPrice
//      */

//      const flightPaths = createFlightPaths(flights);
//      const minPrice = findFlights(src, dst, k, flightPaths); // 0, 3, 1, 
//      return minCost
// };

class MinHeap {
    constructor() { this.a = []; }
    push(x) { this.a.push(x); this._up(this.a.length - 1); }
    pop() {
      if (!this.a.length) return null;
      const top = this.a[0], last = this.a.pop();
      if (this.a.length) { this.a[0] = last; this._down(0); }
      return top;
    }
    size() { return this.a.length; }
    _up(i){ const a=this.a; while(i){ const p=(i-1)>>1; if(a[p][0]<=a[i][0]) break; [a[p],a[i]]=[a[i],a[p]]; i=p; } }
    _down(i){ const a=this.a; for(;;){ let l=i*2+1,r=l+1,s=i;
        if(l<a.length && a[l][0]<a[s][0]) s=l;
        if(r<a.length && a[r][0]<a[s][0]) s=r;
        if(s===i) break; [a[s],a[i]]=[a[i],a[s]]; i=s;
    } }
  }
  
  function findCheapestPrice(n, flights, src, dst, k) {
    // build graph
    const adj = Array.from({ length: n }, () => []);
    for (const [u, v, w] of flights) adj[u].push([v, w]);
  
    // best[v][s] = min cost to reach v using exactly s stops (edges)
    const best = Array.from({ length: n }, () => Array(k + 2).fill(Infinity));
    best[src][0] = 0;
  
    const pq = new MinHeap();
    pq.push([0, src, 0]); // [cost, node, stopsUsed]
  
    while (pq.size()) {
      const [cost, u, s] = pq.pop();
      if (u === dst) return cost;              // first time popped is cheapest to dst with some s≤k+1
      if (s === k + 1) continue;               // cannot take more edges
  
      // Relax neighbors
      for (const [v, w] of adj[u]) {
        const ns = s + 1, nc = cost + w;
        if (nc < best[v][ns]) {
          best[v][ns] = nc;
          pq.push([nc, v, ns]);
        }
      }
    }
    return -1;
  }
  
  // Example:
  // console.log(findCheapestPrice(3, [[0,1,100],[1,2,100],[0,2,500]], 0, 2, 0)); // 500
  

const result = findCheapestPrice(3, [[0,1,100],[1,2,100],[0,2,500]], 0, 2, 0);
console.log(result, "REsult")