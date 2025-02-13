
// var buildInDegreeAndOutDegree = function(numCourses, prerequisites){


//     let indegree = {};
//     let outDegree = {};


//     for(let course of prerequisites){
//         let [courseName, prerequisite ] = course;
//         //Calculating outdegree
//         outDegree[courseName] = (outDegree[courseName] || new Set()).add(prerequisite);
//         outDegree[prerequisite] = (outDegree[prerequisite]|| new Set())

//         //calculating indegree
//         indegree[prerequisite] =  (indegree[prerequisite] || 0) + 1
//         indegree[courseName] = (indegree[courseName] || 0)
//     }

//     return [indegree, outDegree];
// }


// var createGraph = function(prerequisites){
//     let map = new Map();


//     for(let i=0; i< prerequisites.length;i++){
//         let [course1, course2] = prerequisites[i]
//         map.set(course1, (map.get(course1)|| new Set()).add(course2));
//     }

//     return map;
// }

// var canFinish = function (numCourses, prerequisites) {
//     let graph = createGraph(prerequisites);
//     // const [indegree,outDegree] = buildInDegreeAndOutDegree(numCourses, prerequisites);

//     // if(prerequisites.length == 0){
//     //     return true;
//     // }
//     // let queue = [], result = [];

//     // for(let [key, value]  of Object.entries(indegree)){
//     //     if(value == 0){
//     //         queue.push(key)
//     //     }
//     // }


//     // console.log(indegree, outDegree)


//     // while(queue.length>0){
//     //     let course = queue.shift();


//     //     result.push(course)


//     //     for(let prerequisite of outDegree[course]){
//     //         indegree[prerequisite]--;
//     //         if(indegree[prerequisite] == 0){
//     //             queue.push(prerequisite);
//     //         }
//     //     }

//     //     console.log(queue, result)
//     // }
//     // console.log(queue, result, )


//     // return result.length == Object.keys(indegree).length
//     let iscyclic = false



//     var dfs = function(node, visited){

//         console.log(node, graph)


//         if(visited[node]){
//             console.log("Inside", node)
//             iscyclic = true;
//             return;
//         }

//         visited[node] = true


//         if(!graph.get(node)){
//             return;
//         }
//         for(let course of graph.get(node).values()){
//             dfs(course, {...visited});
//         }
//     }

//     for(let key of graph.keys()){

//         console.log("==New entry")
//         dfs(key, {})
//     }

//     return !iscyclic;
// };




// */
var canFinish = function(numCourses, prerequisites) {
    const adj = Array(numCourses).fill(0).map(() => [])

    prerequisites.forEach(([c, prereq]) => adj[c].push(prereq))

    const visited = new Set()
    const curr = new Set()
    const dfs = (i) => {
        if (curr.has(i)) return false
        if (visited.has(i)) return true

        visited.add(i)
        curr.add(i)

        let canComplete = true

        for (let neighbor of adj[i]) {
            console.log(neighbor)
            if (!dfs(neighbor)) {
                canComplete = false
                break
            }
        }

        curr.delete(i)

        return canComplete
    }

    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return false
    }

    return visited.size == numCourses
};
console.log(canFinish(5, [[1,4], [2,4],[3,1],[3,2]]))
