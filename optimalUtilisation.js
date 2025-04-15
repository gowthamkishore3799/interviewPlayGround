function findMatch(backgroundAppList, target) {
  let low = 0;
  let high = backgroundAppList.length - 1;
  let result = -1;

  while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      let mem = backgroundAppList[mid][1];

      if (mem === target) {
          return mem;
      }

      if (mem < target) {
          result = mem;       // store best so far
          low = mid + 1;
      } else {
          high = mid - 1;
      }
  }

  return result;
}



function optimalUtilization(deviceCapacity,foregroundAppList, backgroundAppList) {


  /**
  I can think of o(n^2) and i can look and if currentVal> max , pish into new array
  else skip or == push into array ad return it
  **/
  // write your code here

  const backGroundHashMap = new Map();

  for(let [appId, memory] of backgroundAppList){
    let result = backGroundHashMap.get(memory) || []
    result.push(appId)
    backGroundHashMap.set(memory, result)
  }

  let maxCompute = [];
  let max = Number.MIN_SAFE_INTEGER;


  backgroundAppList.sort((a,b)=> a[1]-b[1]);



  for(let i=0; i<foregroundAppList.length; i++){
    let remaining = deviceCapacity - foregroundAppList[i][1];

    console.log(remaining, foregroundAppList[i][1])

    if( remaining >=0 ){

       const bgJob = findMatch(backgroundAppList, remaining);
       

       if(bgJob == -1){
        continue
       }

       if(bgJob + foregroundAppList[i][1] < max){
          continue;
       }

       if(bgJob+foregroundAppList[i][1] > max){
        maxCompute = [];
       }


       for(let val of backGroundHashMap.get(bgJob)){
         let result = [foregroundAppList[i][1], val];
         maxCompute.push(result);
       }
    }
  }


  return maxCompute
}

console.log(optimalUtilization(7, [[1, 2], [2, 4], [3, 6]], [[1, 2]]))