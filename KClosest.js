const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

var kClosest = function(points, k) {
    

    const queue = new MinPriorityQueue();

    for(let point of points){
        let [x,y] = point;
        let priority = Math.pow(x-0, 2) + Math.pow(y-0, 2)
        console.log(point, priority)
        queue.enqueue(point, priority);
    }

    let result = [];
    for(let i=k; i>0; i--){
        result.push(queue.dequeue().element)
    }

    return result;
};



console.log(kClosest([[1,3],[-2,2]], 2))