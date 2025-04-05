function findOptimalPackageArrangement(importance) {
    // Write your code here

    let positivesum = 0;
    let negativeNumbers = []
    let noofPostiveImportance = 0;
    let noofNegativeImportance =0;
    
    
    for(let num of importance){
        if(num <=0){
            noofNegativeImportance++;
            negativeNumbers.push(num)
        } else{
            noofPostiveImportance++;
            positivesum+= num;
        }
    
    }
    
    negativeNumbers.sort((a,b)=> b-a)


    if(noofNegativeImportance == importance.length){
        return -1;
    }



    if(noofPostiveImportance == importance.length){
        return -1;
    }
    
    
    

    for(let i=0; i<negativeNumbers.length; i++){
        positivesum = negativeNumbers[i]+positivesum;

       
        console.log(negativeNumbers[i])
        
        
        if(positivesum <=0){
            return importance.length-(negativeNumbers.length-i);
        }
    }
    
    return -1;



}

console.log(findOptimalPackageArrangement([2,1,-4]))