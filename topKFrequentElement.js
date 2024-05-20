var topKFrequent = function(nums, k) {
    let frequencyMap =new Map()

    for(let num of nums){
        frequencyMap.set(
            num,
            frequencyMap.get(num) ? frequencyMap.get(num) + 1 : 1
          );
    }



    let topkElement = [...frequencyMap.entries()].sort((a,b) => a[1] > b[1]).slice(0, k).map((element) => element[0])
    return topkElement


};



console.log(topKFrequent([1,1,1,2,2,3], 2))