


const findTshape = function(arr){

    let m = arr.length;
    let n = arr[0].length

    // for(let i=0; i< arr.length; i++){
        let i=0, j=0;
        while(i<arr.length){
            while(j<arr.length){
                if(arr[i][j] == 1 && arr[i][n-j] == 1){

                
                }
            }
        }
        // for(let j=0; j< arr[0].length; j++){


            
        // }
    }
}

console.log(findTshape([
    [0,1,1,1,0],
    [0,0,1,0,0],
    [0,0,1,0,0]
    ]))