var hIndex = function(citations) {

    const n = citations.length;
    citations.sort((a, b) => a - b);

    for (let i = 0; i < n; i++) {
        if (citations[i] >= n - i) {
            console.log(n-i)
            return n - i;
        }
    }

    return 0;
};


/**
 * no of papers = array.length
 * 
 * loop through 1 to no_of_papers and
 * 
 * 
 * and if if no of papers greater than value, max
 * 
 * 
 * o(n^2)
 * 
 * 
 * 
 * for(let i=1; i< citations.length; i++){
 * 
 * 
 * for(let j=1; j< citations.length; j++){
 * 
 * if(arr[j] > i){
 * count++}
 * }
 * 
 * if(count>i){
 * max = Math.max(max, count)}
 * 
 * 
 * 
 * [100,200,300,400, 500]
 * 
 * 
 * 
 * [10,20,30,40,50,60,70,80,90]
 * 
 * 
 * 5 > 
 * }
 * 
 * 
 * 
 * 
 */

console.log(hIndex([100]))