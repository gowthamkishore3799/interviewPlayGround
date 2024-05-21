/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */


const mergeList = function(list1 = null, list2 = null){
    if(list1 == null){
        return list2;
    }


    if(list2 == null){
        return list1;
    }

    let res = new ListNode(null, null);
    let tempList = res;


    while(list1?.val != null && list2?.val !=null){
        if(list1.val < list2.val){
            tempList.next = new ListNode(list1.val, null);
            list1 = list1.next;
        } else{
            tempList.next = new ListNode(list2.val, null);
            list2 = list2.next;
        }
        tempList = tempList.next
    }

    if(list1?.val !=null){
        tempList.next = new ListNode(list1.val, list1.next)
    }

   if(list2?.val !=null){
        tempList.next = new ListNode(list2.val, list2.next)
    }

    return res.next;
}
var mergeKLists = function(lists) {
    let newList = null;

    for(let list of lists){
        newList = mergeList(newList, list)
    }

    return newList


   
};