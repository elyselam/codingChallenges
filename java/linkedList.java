public class Node {
	Node next;
	int data;

	public Node(int data) {
		this.data = data;
	}
}
//wrap head
public class LinkedList {
	Node head;
	public void append(int data) {
		if (head == null) {
			head = new Node(data);
			return;
		}
		//starts at the head 
		Node current = head;
		//while not at the end of list
		while (current.next != null){
			//keep moving 
			current = current.next;
		}
		//now at the end of linkedlist, create this new node
		current.next = new Node(data);
	}
	public void prepend(int data) {
		Node newHead = new Node(data);
		newHead.next = head;
		head = newHead;		
	}

	public void deleteWithValue (int data) {
		if (head == null) return;
		//if delete head, just skip it
		if (head.data == data) {
			head = head.next;
			return;
		}
		
		Node current = head;
		while (current.next != null) {
			if (current.next.data = data) {
				//just skip next and go to the next.next val
				current.next = current.next.next;
			}
		}
	}



}