let result = new ListNode();
let p1 = l1;
let p2 = l2;
let p3 = result;
let carry = 0;

while (p1 || p2) {
    let v1 = p1 ? p1.val : 0;
    let v2 = p2 ? p2.val : 0;
    let val = v1 + v2 + carry;
    carry = Math.floor(val / 10);
    p3.next = new ListNode(val % 10);
    if (p1) {
        p1 = p1.next
    }
    if (p2) {
        p2 = p2.next
    }
    p3 = p3.next
}

if (carry) {
    p3.next = new ListNode(carry);
}

return result.next