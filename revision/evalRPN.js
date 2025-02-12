var evalRPN = function(tokens) {
    let stack = [];


    for(let operation of tokens){

        if(!isNaN(operation)){
            stack.push(parseInt(operation))
        } else {
            let [operand1, operand2] = stack.splice(-2);

            let result = parseInt(eval(`${operand1} ${operation} ${operand2}`));
            stack.push(result);
        }
    }

    console.log(stack[0])
    return stack[0]
};
