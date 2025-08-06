import java.util.*;

class Solution {
    private List<List<Integer>> result;
    private HashSet<String> duplicates;

    Solution(){
        result = new ArrayList<>();
        duplicates = new HashSet<>();
    }

    public void dfs(int index, int target, List<Integer> currArr, int[] candidates){
        if(target == 0){
            List<Integer> sorted = new ArrayList<>(currArr);
            Collections.sort(sorted);
            String key = sorted.toString(); // Unique key

            if(duplicates.add(key)) {
                result.add(new ArrayList<>(sorted));
            }
            return;
        }

        if(target < 0){
            return;
        }

        for(int i=index; i< candidates.length; i++){
            currArr.add(candidates[i]);
            dfs(i+1, target-candidates[i], currArr, candidates);
            currArr.remove(currArr.size()-1);
        }
    }


    public List<List<Integer>> combinationSum2(int[] candidates, int target) {
        Arrays.stream(candidates).sorted();
        dfs(0, target, new ArrayList<>(), candidates);
        return result;
    }


    public static void main(String[] args){

        int[] candidates = {2,5,2,1,2};
        Solution sol = new Solution();
        List<List<Integer>> result = sol.combinationSum2(candidates, 5);
        System.out.println(result);
    }
}