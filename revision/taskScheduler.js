/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */

var createTasks = function(tasks){
    let taskMap = new Map();
    for(let task of tasks){
        taskMap.set(task, (taskMap.get(task) || 0) + 1)
    }

    return taskMap;
}




class MaxPriorityTaskQueue{
    _timeInterval;
    cycleCount;
    priorityqueue; 
    constructor(n){
        this._timeInterval = n
        this.priorityqueue = [];
        this.cycleCount = 0;
    }


    _findParent(index){
        return Math.floor((index-1)/2);
    }

    _findLeftChild(index){
        return ((2*index) + 1)
    }

    _findRightChild(index){
        return ((2*index) + 2)
    }


    _heapifyUp(){
        let index = this.priorityqueue.length-1;
        let parent = this._findParent(index);
        


        while(parent >=0) {
            if(this.priorityqueue[index].startTime < this.priorityqueue[parent].startTime){
                [this.priorityqueue[index], this.priorityqueue[parent]] = [this.priorityqueue[parent], this.priorityqueue[index]]
            } else if(this.priorityqueue[index].startTime == this.priorityqueue[parent].startTime){
                if(this.priorityqueue[index].noOfTasks > this.priorityqueue[parent].noOfTasks){
                    [this.priorityqueue[index], this.priorityqueue[parent]] = [this.priorityqueue[parent], this.priorityqueue[index]]
                }
            }
            index = parent
            parent = this._findParent(index);
        }
        
    }


    printQueue(){
         for(let tasks of this.priorityqueue){
            console.log(tasks, 'Tasks')
         }
    }



    initaliseTasks(taskName, noOfTasks, startTime){

        if(noOfTasks > 0){
            this.priorityqueue.push({
                taskName,
                noOfTasks,
                startTime 
            })
    
    
            if(this.priorityqueue.length>1){
                this._heapifyUp();
            }
        }

        
    }

    _peekImportantTask(){
        return this.priorityqueue[0];
    }

    _heapifyDown() {
        let parent = 0; 
        let index = parent;
    
        while (true) {
            let leftchild = this._findLeftChild(index);
            let rightchild = this._findRightChild(index);
            let smallest = index;
    
            if (leftchild < this.priorityqueue.length) {
                if (
                    this.priorityqueue[leftchild].startTime < this.priorityqueue[smallest].startTime ||
                    (this.priorityqueue[leftchild].startTime === this.priorityqueue[smallest].startTime &&
                        this.priorityqueue[leftchild].noOfTasks > this.priorityqueue[smallest].noOfTasks)
                ) {
                    smallest = leftchild;
                }
            }
    
            if (rightchild < this.priorityqueue.length) {
                if (
                    this.priorityqueue[rightchild].startTime < this.priorityqueue[smallest].startTime ||
                    (this.priorityqueue[rightchild].startTime === this.priorityqueue[smallest].startTime &&
                        this.priorityqueue[rightchild].noOfTasks > this.priorityqueue[smallest].noOfTasks)
                ) {
                    smallest = rightchild;
                }
            }
    
            if (smallest === index) break;
    
            [this.priorityqueue[index], this.priorityqueue[smallest]] = [this.priorityqueue[smallest], this.priorityqueue[index]];
    
            index = smallest;
        }
    }
    

    _execute(){
       let maxPriorityTask = this.priorityqueue[0];
       this.priorityqueue[0] = this.priorityqueue[this.priorityqueue.length-1];
       this.priorityqueue.pop();
       this._heapifyDown();

       console.log(this.priorityqueue, "Top task")
       let {taskName, noOfTasks, startTime} = maxPriorityTask
       this.initaliseTasks(taskName, noOfTasks-1, startTime + this._timeInterval + 1 )

    }

    executeTasks(){
        let task = this._peekImportantTask();
       
        while(task){
            console.log(task, "Task..")
            this.cycleCount = this.cycleCount + 1;
            
            if(task.startTime <= this.cycleCount){
                this._execute();
            }
            task = this._peekImportantTask();
        }
        
    }
}


var leastInterval = function(tasks, n) {


    if(tasks.length == 1){
        return 1;
    }

    let taskMap = createTasks(tasks);
    let pq = new MaxPriorityTaskQueue(n);

    let tasksInfo = taskMap.keys();
    for(let task of tasksInfo){
        pq.initaliseTasks(task, taskMap.get(task), 1)
    }


    pq.executeTasks();

    return pq.cycleCount;
};

console.log(leastInterval(["A","B","C","D","E","A","B","C","D","E"], 4))


//Push the thing to priorityqueue

/**
 * First priority time
 * Second priority max
 * 
 * 
 * when inserting, check if time is same, lower the time, higher the priority
 * 
 * same time , then max
 * 
 * 
 * 
 * A->3(1), B-3(1)
 * 
 * 
 */