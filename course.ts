interface ICourses{
    createAdjList(prerequisites: number[][]): void;
    canFinish(): boolean;
}

class Courses implements ICourses {
    private courses;
    private isCycleFound: boolean;

    constructor(){
        this.courses = new Map<number, Set<number>>();
        this.isCycleFound = false;

    }

    createAdjList(prerequisites: number[][]): void{

        for(let i=0; i<prerequisites.length; i++){
            let [courseName, dependency ] = prerequisites[i];
            const courseDepedencies = this.courses.get(courseName) || new Set();
            courseDepedencies.add(dependency);
            this.courses.set(courseName, courseDepedencies);
        }
    }


    dfs(course: number, alreadyStudiedCourses: Map<number, boolean>){
        if(alreadyStudiedCourses.has(course)){
            console.log(course, "Course", alreadyStudiedCourses)
            this.isCycleFound = true;
            return;
        }

        alreadyStudiedCourses.set(course, true);
        for(let newCourse of this.courses.get(course) || new Set()){
            this.dfs(newCourse, alreadyStudiedCourses);
            if(this.isCycleFound){
                return;
            }

            alreadyStudiedCourses.delete(newCourse);
        }
    }

    canFinish(): boolean{
        let coursesStudied = new Map<number, boolean>();

        for(let course of this.courses.keys()){
            console.log(course, "Course")
            this.dfs(course, new Map()) //0
        }

        return !this.isCycleFound;
    }


}

var canFinish = function(numCourses: number, prerequisites: number[][]) {
    /**
    i) add in hasmap adj list
    2) from i=0 to n-1;
    
    var dfs(
    **/
    const courses = new Courses();
    courses.createAdjList(prerequisites);

    if(courses.canFinish()){
        return true;
    }

    return false
    
    
};

console.log(canFinish(5, [[1,4],[2,4],[3,1],[3,2]]))