class DisjointSet {
    constructor(n) {
      this.parent = Array.from({ length: n }, (_, i) => i);
      this.rank = new Array(n).fill(0);
    }
  
    find(u) {
      if (this.parent[u] !== u) {
        this.parent[u] = this.find(this.parent[u]); // Path compression
      }
      return this.parent[u];
    }
  
    union(u, v) {
      let rootU = this.find(u);
      let rootV = this.find(v);
  
      if (rootU === rootV) return false; // Already connected
  
      // Union by rank
      if (this.rank[rootU] < this.rank[rootV]) {
        this.parent[rootU] = rootV;
      } else if (this.rank[rootU] > this.rank[rootV]) {
        this.parent[rootV] = rootU;
      } else {
        this.parent[rootV] = rootU;
        this.rank[rootU]++;
      }

      console.log(this.rank, this.parent, rootU, rootV)
  
      return true;
    }
  }
  
  // Example usage
  const ds = new DisjointSet(5);


  for(let edge of [[1, 2], [1, 3], [2, 4], [4, 1]]){
    console.log(ds.union(edge[0], edge[1]))
  }

  