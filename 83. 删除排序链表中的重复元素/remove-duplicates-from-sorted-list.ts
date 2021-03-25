/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/* 迭代法
function deleteDuplicates(head: ListNode | null): ListNode | null {
    let current:ListNode = head;
    while(current && current.next) {
        if(current.val === current.next.val) {
            current.val = current.next.val;
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return head;
};
*/
//递归法
function deleteDuplicates(head: ListNode | null): ListNode | null {
    if(head === null || head.next === null) {
        return head;
    }
    head.next = deleteDuplicates(head.next);
    if(head.val === head.next.val) {
        head = head.next;
    }
    return head;
};