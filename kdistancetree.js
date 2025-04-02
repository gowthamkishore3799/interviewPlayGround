const {buildTreeForCode} = require('./tree');





function findNodesForK(k){
    

    let treeNodes = [];
    let noOfNodes = 0;

    const tree = buildTreeForCode();


    treeNodes.push([[tree], 0])


    while(treeNodes.length > 0){

        console.log(treeNodes.length, 'Length')






        let [nodes, height] = treeNodes.shift();
        let newChild = [];

        console.log(nodes.length, 'Length')


        for(let node of nodes){

            if(node.left){
                newChild.push(node.left)
            }


            if(node.right){
                newChild.push(node.right)
            }
        }


        let newheight = height+1;

        if(newheight-k >=0 ){
            noOfNodes += newChild.length
        }

        if(newChild.length > 0){
            treeNodes.push([newChild, newheight]);
        }
       
    }

    console.log(noOfNodes, 'Mpdes..')

}



findNodesForK(2);
