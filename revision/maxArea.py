from typing import List;

class Solution:
    def maxArea(self, height: List[int]) -> int:
        i, j = 0, len(height)-1;
        waterCount = 0;

        if(len(height) < 2):
            return 0

        while i<=j:
            waterCount = max(waterCount, min(height[j], height[i]) * (j-i))


            if height[i] < height[j]:
                i+= 1;
            else:
                j-= 1;

        print(waterCount)
        return waterCount;



        





sol = Solution()

sol.maxArea([8,7,2,1])