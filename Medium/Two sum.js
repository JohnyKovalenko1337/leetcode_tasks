/* 
You are given two non-empty linked lists 
representing two non-negative integers.
 The digits are stored in reverse order,
  and each of their nodes contains a single digit.
   Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
 */
const addTwoNumbers = (l1, l2) => {
    let s = new ListNode('dummy'), cursor = s, carry = 0;
    
    while (l1 || l2 || carry) {

        cursor.next = new ListNode();
        cursor = cursor.next;

        cursor.val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;

        carry = cursor.val >= 10;
        cursor.val %= 10;

        if (l1) l1 = l1.next;

        if (l2) l2 = l2.next;
    }
    
    return s.next;

};

addTwoNumbers([2,4,3],[5,6,4])

