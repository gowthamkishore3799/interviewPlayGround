var generateParenthesis = function(n) {
    const res = []
    const go = (left, right, index, s) =>{

        if (s.length === 2 * index) {
            res.push(s);
            return;
          }


    if(left<index) {
        go(left+1, right, index, s+ "(")
    } 

    if(right< left){
        go(left, right+1, index, s+")")
    }

}

go(0,0, n, "")

return res

};

