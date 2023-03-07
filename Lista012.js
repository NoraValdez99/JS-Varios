class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function sortLinkedList(head) {
    let zero = new ListNode(0);
    let one = new ListNode(0);
    let two = new ListNode(0);
    let p0 = zero;
    let p1 = one;
    let p2 = two;
  
    // recorremos la lista y dividimos los nodos en tres grupos
    while (head) {
      if (head.val === 0) {
        p0.next = head;
        p0 = p0.next;
      } else if (head.val === 1) {
        p1.next = head;
        p1 = p1.next;
      } else {
        p2.next = head;
        p2 = p2.next;
      }
      head = head.next;
    }
  
    // unimos los grupos en orden
    p1.next = two.next;
    p0.next = one.next;
    p2.next = null;
  
    // imprimimos el resultado
    let result = zero.next;
    while (result) {
      console.log(result.val);
      result = result.next;
    }
  
    return zero.next;
  }
  
  // Creamos una lista enlazada de prueba
  let n1 = new ListNode(2);
  let n2 = new ListNode(0, n1);
  let n3 = new ListNode(1, n2);
  let n4 = new ListNode(2, n3);
  let n5 = new ListNode(1, n4);
  let n6 = new ListNode(0, n5);
  let head = n6;
  
  // Ordenamos la lista y la imprimimos
  sortLinkedList(head);