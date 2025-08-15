const permutationNumber = function(arr) {
    let breakpoint = -1;

    // Step 1: Find breakpoint
    for (let i = arr.length - 2; i >= 0; i--) {
        if (arr[i] < arr[i + 1]) {
            breakpoint = i;
            break;
        }
    }

    if (breakpoint === -1) {
        return arr.reverse().join("");
    }

    let swapIndex = arr.length - 1;
    for (let i = arr.length - 1; i > breakpoint; i--) {
        if (arr[i] > arr[breakpoint]) {
            swapIndex = i;
            break;
        }
    }

    [arr[breakpoint], arr[swapIndex]] = [arr[swapIndex], arr[breakpoint]];

    let left = breakpoint + 1, right = arr.length - 1;
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }

    return arr.join("");
};


const result = permutationNumber([1,3,2]);

console.log(result, "Result");