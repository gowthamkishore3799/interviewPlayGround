import java.util.ArrayList;
import java.util.List;


/**
 * start with i=0;
 * dfs(i=0, diff)
 * pass on List
 *
 * dfs(diff, result){
 *     if(diff == 0){
 *         result = result
 *     }
 *
 *     if(diff< 0){
 *         return;
 *     }
 *
 *     for(int i=0; i<nums.length; i++){
 *         dfs(diff-nums[i], result.add(nums[i]))
 *         result.pop
 *     }
 * }
 */
public class Main {
        public List<List<Integer>> result;

        Main() {
            result = new ArrayList<>();
        }

        public void dfs(int diff, List<Integer> currArr, int[] nums) {
            if(diff == 0){
                System.out.println(currArr + "Print result" + diff);
                result.add(currArr);
            }

            if(diff< 0){
                return;
            }

            for(int num: nums){
                List<Integer> newArray = currArr;
                System.out.println(newArray.toString() + "Print");
                newArray.add(num);
                dfs(diff-num, new ArrayList<>(newArray), nums);
                newArray.removeLast();
            }
        }
        public List<List<Integer>> combinationSum(int[] nums, int target){
            dfs(target, new ArrayList<>(), nums);
            return result;
        }

        public static void main(String[] args) {
            Main m = new Main();
            int[] nums = {2,5,6,9};
            int target = 9;
            List<List<Integer>> result = m.combinationSum(nums, target);
            System.out.println(result);
        }
}
