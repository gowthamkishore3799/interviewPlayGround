
        var rob = function(nums) {
            const memo = {};
        
            const dfs = (i) => {
                if (i >= nums.length) return 0;
                if (i in memo) return memo[i];
        
                // Rob this house and go to i + 2
                // Or skip this house and go to i + 1
                const rob = nums[i] + dfs(i + 2);
                const skip = dfs(i + 1);
        
                memo[i] = Math.max(rob, skip);
                return memo[i];
            };
            return dfs(0)
        };

       
        



console.log(rob([4,1,1,2]))