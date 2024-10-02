var dailyTemperatures = function(temps) {
    let stack = [];
    let res = new Array(temps.length).fill(0);
    for(let i = temps.length - 1; i >= 0; i--) {
        while(stack.length && temps[stack[stack.length - 1]] <= temps[i]) {
            stack.pop()
        }
        // end of stack
        if(stack.length) {
            res[i] = stack[stack.length - 1] - i;
        }
        stack.push(i);
    }
    return res;
};