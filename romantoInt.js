var romanToInt = function(s) {
    



    var romanvalue = function(val) {

        if(val == undefined){
            return null
        }
        switch (val){
            case "I":
                return 1;
            case "V":
                return 5;
            case "X":
                return 10;
            case "L":
                return 50;
            case "C":
                return 100;
            case "D":
                return 500;
            case "M":
                return 1000;
        }
    }

    let sum = romanvalue(s[0]);


    for(let i=1; i<s.length; i++){

        let currentRomanval = romanvalue(s[i]), previousRomanval = romanvalue(s[i-1])

        if(previousRomanval < currentRomanval ) {
            sum += currentRomanval - (2*previousRomanval)
        } else {
            sum += currentRomanval
        }

        
    }

    return sum;
};

console.log(romanToInt("MCMXCIV"))