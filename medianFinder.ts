class MedianFinder {
    nums : number[] =[];
    constructor() {    
    }

    addNum(num: number): void {
        

        let len = this.nums.length;

        if(this.nums[len-1] < num){
            this.nums.push(num);
            return;
        }

        let index = this.nums.findIndex((element) => element > num);
        this.nums.splice(index, 0, num);
    }

    findMedian(): number {

        let len = this.nums.length;


        if(len % 2 != 0){
            let mid = Math.ceil(len/2);
            return this.nums[mid];
        }

        let mid = Math.ceil(len/2);
        return ((this.nums[mid] + this.nums[mid-1])/2)

    }
}


const mf = new MedianFinder();
mf.addNum(1)
mf.addNum(2);
mf.addNum(3)

console.log(mf.findMedian())
