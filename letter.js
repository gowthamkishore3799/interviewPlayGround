var letterCombinations = function(digits) {
    

    let array = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]
    }


    


    let result = [];
    var dfs = function(digits, index, character) {

        if(index == digits.length){
            result.push(character)
            return;
        }

        let digit = array[digits[index]];


        for(let i=0; i< digit.length; i++){
            dfs(digits, index+1, character + digit[i])
        }

    }

    

    dfs(digits, 0, "")

    return result;



};


console.log(letterCombinations("23"))