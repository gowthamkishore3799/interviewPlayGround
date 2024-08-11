function plusMinus(arr) {
    let posNumberCount = 0, negNumberCount = 0, zeroNumberCount = 0;
    
    for(let num of arr){
        if(num > 0){
            posNumberCount++;
        } else if(num < 0){
            negNumberCount++;
        } else {
            zeroNumberCount++;
        }
    }
    
    posNumberCount = (posNumberCount/arr.length).toFixed(6)
    negNumberCount = (negNumberCount/arr.length).toFixed(6)
    zeroNumberCount = (zeroNumberCount/arr.length).toFixed(6)
    
    console.log(posNumberCount + "\n" + negNumberCount + "\n" +zeroNumberCount);

}


/**
 * Hacker Rank
 */