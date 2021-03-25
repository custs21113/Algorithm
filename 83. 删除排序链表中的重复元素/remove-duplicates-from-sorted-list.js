/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var deleteDuplicates = function(head) {
//     let current = head;
//     while(current&&current.next){
//         if(current.val === current.next.val) {
//             current.val = current.next.val;
//             current.next = current.next.next;
//         } else {
//             current = current.next;
//         }
//     }
//     return head;
// };

var deleteDuplicates = function(head){
    if(head === null || head.next === null) {
        return head;
    }
    head.next = deleteDuplicates(head.next);
    if(head.val === head.next.val){
        head = head.next;
    }
    return head;
}