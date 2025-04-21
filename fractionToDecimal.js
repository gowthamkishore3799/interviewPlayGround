var fractionToDecimal = function(numerator, denominator) {
    
    
    let result = numerator/denominator;
    
    if(typeof result == "number" && !Number.isInteger(result)){

        console.log(result, String(result).split(".")[1])
        
        
        let [num, fraction] = String(result).split(".");
        
        
        if(fraction.length == 1){
            return `${num}.${fraction}`
        }
        
        
        
        let i=0, j=0;
        
        
        while(j<fraction.length){
            if(fraction.slice(i, j+1) == fraction.slice(j+1, j+(j-i+1)+1)){
                return  `${num}.(${fraction.slice(i, j+1)})`
            } else{
                console.log(fraction.slice(i, j+1), )
                j++;
            }
        }
      
    }
    
    
    return String(result);
};

console.log(fractionToDecimal(4,333))