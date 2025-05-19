
var convertToTitle = function(columnNumber) {
    
    const reverseAlphabetMap = {
        1: 'A', 2: 'B', 3: 'C', 4: 'D', 5: 'E',
        6: 'F', 7: 'G', 8: 'H', 9: 'I', 10: 'J',
        11: 'K', 12: 'L', 13: 'M', 14: 'N', 15: 'O',
        16: 'P', 17: 'Q', 18: 'R', 19: 'S', 20: 'T',
        21: 'U', 22: 'V', 23: 'W', 24: 'X', 25: 'Y', 26: 'Z'
      };
    
    
    // var findPositionNumber = function(columnNumber){
        
        
    //     if(!columnNumber){
    //         return 0;
    //     }
        
    //     let positionOfAlphabet = columnNumber[columnNumber.length-1];
        
        
    //     return (26*findPositionNumber(columnNumber.slice(0, columnNumber.length-1)) )+ alphabetMap[positionOfAlphabet]
        
    // }
    
    // return findPositionNumber(columnNumber);

    let str = ""

    while (columnNumber > 0) {
        let rem = columnNumber % 26;

        if (rem === 0) {
            rem = 26;
            columnNumber -= 1; // Important to fix 'Z', 'AZ' kind of case
        }

        str = reverseAlphabetMap[rem] + str;

        columnNumber = Math.floor(columnNumber / 26);
    }

    return str;
};

console.log(convertToTitle(27))