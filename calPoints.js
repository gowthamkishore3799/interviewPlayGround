
var calPoints = function(operations) {
    const stack = [];

    for(let operation of operations){
        switch (operation){
            case "C":
                stack.pop();
                break;
            case "D":
                let val = stack[stack.length-1] * 2;
                stack.push(val);
                break;
            case "+":
                let sum = stack[stack.length-1] + stack[stack.length-2];
                stack.push(sum);
                break
            default:
                stack.push(parseInt(operation))
        }
    }


    let sum=0;
    for(let val of stack){
        sum += val;
    }

    return sum;
};


console.log(calPoints(["5","-2","4","C","D","9","+","+"]))