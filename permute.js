var permute = function(nums) {
   /**
   take a numebr and try out other numbers*/
    
   let result = []
    
    
  var dfs = function(arr, visited = {}){ 
      if(arr.length == nums.length){
        result.push(arr);
        return;
      }
      
      
      
      
      for(let i=0; i<nums.length; i++){
          if(!(i in visited)){
              dfs([...arr, nums[i]], {...visited, [i]: true});
          }
      }
      
      
  }
    
    
    
  dfs([], {});
    
   return result;
};


console.log(permute([1,2,3]))