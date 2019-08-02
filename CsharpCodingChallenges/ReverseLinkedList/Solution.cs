namespace ReverseLinkedList {
	public static class Solution {

		public static ListNode reverseList(ListNode head) {
			ListNode prev = null;
			ListNode curr = head;
			while (curr != null) {
				ListNode nextTemp = curr.next;
				curr.next = prev;
				prev = curr;
				curr = nextTemp;
			}
			return prev;
		}
	}
}