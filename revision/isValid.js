var isValid = function(s) {


    if(!s){
        return false
    }

    if(s.length<2){
        return false
    }


    const hashMap = new Map([
    ["{", "}"],
    ["[", "]"],
    ["(", ")"]
]);

    let stack = [];



    for(let char of s){
        if(hashMap.has(char)){
            stack.push(hashMap.get(char))
        } else{
            if(char != stack.pop()){
                return false;
            }
        }
    }

    return stack.length == 0? true: false;
}


console.log(isValid('(('))