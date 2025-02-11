function lengthOfLongestSubstring(s) {
    let stack = [];

    if(s.length == 0){
        return 0;
    }



    let max = 1;
    for(let i=0; i<s.length;i++){
        if(stack.includes(s[i])){
            let index = stack.indexOf(s[i]);

            stack.splice(0, index-0+1)
        }
        stack.push(s[i])

        max = Math.max(max, stack.length)
        console.log(stack)


    }

    return max;
};


console.log(lengthOfLongestSubstring("abcabcbb"))