var evalRPN = function(tokens) {
    let stack = [];


    for(let operation of tokens){

        if(!isNaN(operation)){
            stack.push(parseInt(operation))
        } else {
            let [operand1, operand2] = stack.splice(-2);

            let result = eval(`${operand1} ${operation} ${operand2}`);
            result = result<0? Math.ceil(result): Math.floor(result);
            stack.push(result);
        }
    }

    console.log(stack[0])
    return stack[0]
};

console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))

