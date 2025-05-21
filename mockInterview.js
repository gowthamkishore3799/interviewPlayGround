function smallest_common_element(matrix){




    let sets = new Set();

    for(let i=0; i<matrix[0].length; i++){
        sets.add(matrix[0][i]);
    }


    for(let value of sets.values()){
        for(let i=1; i< matrix.length; i++){


            if(!matrix[i].includes(value)){
                sets.delete(value);
            }
        }
    }

    return Math.min(...sets) || -1
}

console.log(smallest_common_element([
    [1, 2, 3, 4, 5],
    [2, 3, 5, 8, 10],
    [3, 5, 7, 9, 11],
    [1, 3, 5, 6, 8]
]))