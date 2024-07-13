/**
 * First created a directed weighted graph and use use dfs to traverse the paths....
 */


class Graph{

    static graph = {};

    static addVertices(node){
        if(!this.graph[node]){
            this.graph[node] = []
        }
    }


    static addEdges(node){
       let [node1, node2, currencyRate] = node;
       this.addVertices(node1);
       this.addVertices(node2);

       this.graph[node1] = [...this.graph[node1], {node: node2, conversionRate: currencyRate}]
       this.graph[node2] = [...this.graph[node2], {node: node1, conversionRate: parseFloat((1/currencyRate).toFixed(3))}]
    }


    static addDirectedGraph(conversionRates){
        for(let node of conversionRates){
            this.addEdges(node);
        };

    }

    static dfs(startRate, endRate, weight, visited = {}){
        if(startRate === endRate){
            return weight;
        }

        if(visited?.[startRate]){
            return;
        }
        let nodes = this.graph[startRate]
        visited[startRate] = true;
        for(let node of nodes){
            let rate = this.dfs(node.node, endRate, weight*node.conversionRate, visited);
            if(rate !=null){
                return rate
            }
        }
    }



    static findConversionRates(startRate, endRate){
        return this.dfs(startRate, endRate, 1, {});
    }
}


Graph.addDirectedGraph([["USD", "JPY", 110], ["USD", "AUD", 1.45], ["JPY", "GBP", 0.0070]]);
console.log(Graph.findConversionRates("GBP", "AUD"))







