

var isValidSudoku = function (board) {


    let row = Array(9).fill(null).map(()=>new Set())
    let col = Array(9).fill(null).map(()=>new Set())
    let box = Array(9).fill(null).map(()=>new Set())
    let invalidSudoku = false
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            let num = board[i][j]
            if(num != "."){
                const boxIdx = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                if( row[i].has(num) || col[j].has(num)|| box[boxIdx].has(num)){
                    return false
                }

                row[i].add(num)
                col[j].add(num)
                box[boxIdx].add(num)
            }

        }
    }
    return true;

};