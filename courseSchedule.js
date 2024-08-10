var canFinish = function(numCourses, prerequisites) {
    const graph = createGraph(prerequisites);


    console.log(graph)


    if(isCyclicGraph(graph, numCourses)){
        return false;
    }
    return true
};



const isCyclicGraph =  function(graph, numCourses){

    let visited = {};

    for(let node of Object.keys(graph)){


        const isCyclic = function (graph, visited, node){


            if(visited[node]){
                console.log(visited, 'Visited', node)
                return true;
            }
            visited[node] = true;

            const edges = graph[node] || [];




            for(let edge of edges){
                isCyclic(graph, visited, edge);
            }
        }

        const result = isCyclic(graph,visited, node)

        if(result){
            return true;
        }
    }
    return false;
}



const createGraph = function(prerequisites) {
    let adjList = {};
    for(let courses of prerequisites){
        const [childCourse, parentCourse] = courses;
        const course = (adjList[childCourse] ?? []);
        course.push(parentCourse);
        adjList[childCourse] = course;
    }

    return adjList;
}



console.log(canFinish(3, [[0,1],[0,2],[1,2]]))








/**
 * First create a graph, and then check if its cyclic..
 */