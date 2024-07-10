var isValid = function(s) {


    const hashMap = {
        "{" : "}",
        "[" : "]",
        "(" : ")"
    }
    if(!s){
        return false;
    }

    if(s.length%2!=0){
        return false;
    }

    const stack = [];


    for(let i =0; i<s.length; i++){
        if(["(", "{", "["].includes(s[i])){
            stack.push(hashMap[s[i]])
        } else if(stack.pop() != s[i]){
            return false
        }
    }

    if(stack.length >0){
        return false
    }

    return true;



};


console.log(isValid("(("))