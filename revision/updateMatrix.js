const findLengthOfArray = (array) => {
    const m = array.length;
    const n = array[0].length; // Assuming all rows have the same length
    return { m, n };
  };
  
  const isValid = (x, y, m, n) => {
    return x >= 0 && y >= 0 && x < m && y < n;
  };
  
  var updateMatrix = function (mat) {
    const queue = [];
    const { m, n } = findLengthOfArray(mat);
  
    const directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
  
    const twoDArray = Array(m)
      .fill(false)
      .map(() => Array(n).fill(false));
  
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (mat[i][j] == 0) {
          twoDArray[i][j] = 0;
          queue.push([i, j]);
        }
      }
    }
  
    while (queue.length > 0) {
      const [i, j] = queue.shift();
  
      for (let [start, end] of directions) {
        const newX = start + i;
        const newY = end + j;
  
        if (
          isValid(newX, newY, m, n) &&
          twoDArray[newX][newY] === false
        ) {
          queue.push([newX, newY]);
          twoDArray[newX][newY] = twoDArray[i][j] + 1;
        }
      }
    }
  
    console.log(twoDArray, 'TwoDarray');
    return twoDArray
  };


  console.log([[0,0,0],[0,1,0],[1,1,1],[0,0,0]])