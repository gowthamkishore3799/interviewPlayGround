// function computeGrid(i, j){
//     return Math.floor(i/3) * 3 + Math.floor(j/3);  
//    }
   
//    function computeFilledValues(board){
//        let row= [];
//        let col = [];
//        let grid =[];
   
   
//        for(let i=0; i< board.length; i++){
//            for(let j =0; j< board[0].length; j++){
//                let curr = board[i][j]
//                if(curr != "."){     //Filled values;
//                    // row
//                    let rowArr = (row[i] || [])
//                    rowArr.push(curr);
//                    row[i] = rowArr
   
//                    let colArr = (col[j] || [])
//                    colArr.push(curr);
//                    col[j] = colArr
   
//                    let k = computeGrid(i, j)
//                    let gridArr = (grid[k] || [])
//                    gridArr.push(curr);
//                    grid[k] = gridArr;
//                }
//            }
//        }
   
//        return [row, col, grid];
//    } 
//    var solveSudoku = function(board) {
//        let [row, col, grid] = computeFilledValues(board);
   
   
//        var dfs = function (){
//            for(let i=0; i< board.length; i++){
//                    for(let j=0; j<board[0].length; j++){
//                        let k = computeGrid(i, j);
//                        if(board[i][j] == "."){
//                            for(let val=1; val<=9; val++){
//                                val = val.toString()
//                                if(!row[i].includes(val) && !col[j].includes(val) && !grid[k].includes(val)){
//                                    board[i][j] = val;
//                                    if(dfs()) return true
//                                    board[i][j] = "."
//                                }
//                            }
//                            return false;
//                        }
//                    }
//            }
//            return true;
//        }
   
   
//        dfs()
//        console.log(board)
   
//    };

var solveSudoku = function(board) {
    const solve = () => {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (board[row][col] === '.') {
                    for (let num = '1'; num <= '9'; num++) {
                        if (isValid(board, row, col, num)) {
                            board[row][col] = num;
                            if (solve()) return true;
                            board[row][col] = '.';
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    };
    
    const isValid = (board, row, col, num) => {
        for (let i = 0; i < 9; i++) {
            if (board[row][i] === num || board[i][col] === num) return false;
        }
        let startRow = Math.floor(row / 3) * 3;
        let startCol = Math.floor(col / 3) * 3;
        for (let i = startRow; i < startRow + 3; i++) {
            for (let j = startCol; j < startCol + 3; j++) {
                if (board[i][j] === num) return false;
            }
        }
        return true;
    };
    
    let result = solve();
    return result;
};

console.log(solveSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]))