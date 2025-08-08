// function sortingAlgo(arr){
//     console.log(arr)

//     let min = Math.min(...arr);
//     let max = Math.max(...arr);


//     let bucketCount = Math.floor((max-min)/10)+1;
//     console.log(bucketCount)
//     const buckets = Array.from({length: bucketCount}, ()=> [])

//     for(let num of arr){
//         const index = Math.floor((num-min)/10);
//         console.log(index)
//         buckets[index].push(num);
//     }

//     console.log(buckets, "Buckets")

//     const reslt = buckets
//     .map(bucket => bucket.sort((a, b) => a - b))
//     .flat();
//     console.log(reslt)
// }


function mergeSort(arr){



    let low = 0; 
    let high = arr.length-1;

    // while(low<=high){

    if(arr.length<=1) return arr

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
  
    return merge(left, right);
    // }
}

function merge(left, right) {
    const merged = [];
    let i = 0, j = 0;
  
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        merged.push(left[i++]);
      } else {
        merged.push(right[j++]);
      }
    }
  
    return merged.concat(left.slice(i)).concat(right.slice(j));
  }

console.log(mergeSort([10,9,240,212,56,68]))