/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    
    /**
    
    to check if he is eligible for award, need to satisfy tow conditions
    1. Not absent more than 2 days
    2. Never late than 3 days
    
    So, we dont need to track P as its not needed.
    **/
    
    let lateRecord = 0;
    let absentRecord = 0;
    let isEligibleForAward = true;
    
    
    for(let attendance of s){
        
        
        switch(attendance){
            case "L":
                lateRecord+=1;
                break;
            case "A":
                absentRecord+=1;
                lateRecord = lateRecord >=3 ?  3 : 0;
                break;
            default:
                lateRecord = lateRecord >=3 ?  3 : 0;
        }
    }

    
    if(lateRecord >=3 || absentRecord >= 2){
        isEligibleForAward = false;
    }
    
    
    return isEligibleForAward
    

};

console.log(checkRecord("LALL"))