/** Node: node for a singly linked list. */


class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  _get(idx) {
    let currentNode = this.head
    let count = 0;
    while(count != idx && currentNode !== null) {
      count += 1
      currentNode = currentNode.next
    }
    return currentNode
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      this.length++
    } else {
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    }
  }



  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++
    } else {
      newNode.next = this.head
      this.head = newNode
      this.length++
    }
  }

  /** pop(): return & remove last item. */

  pop() {
    this.removeAt(this.length-1)
  }

  /** shift(): return & remove first item. */

  shift() {
    this.removeAt(0)
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if(idx >= this.length-1 || idx < 0) {
      throw new Error('INVALID IDX')
    }
    return this._get(idx).val
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let node = this._get(idx)
    node.val = val
    return node
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length-1) {
      throw new Error (`Idx must be greater than 0 but, also LESS than linked list length which is currently ${this.length}`)
    }
    
    if(idx === 0) {
     return this.unshift(val)
    }

    //My normal case
      let newNode = new Node(val)
      let previousNode = this._get(idx-1)
      let currentNode = this._get(idx)

      previousNode.next = newNode
      newNode.next = currentNode
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    //Handle values that are too large
    if(idx > this.length) {
      throw new Error (`Maximum idx allowed is ${this.length}`)
    }

    if(!this.head) {
      throw new Error ('This is an empty linked list!')
    }

    if(idx === 0) {
      let val = this.head.val;
      this.head = this.head.next
      this.length -= 1
      if (this.length < 2) this.tail = this.head;
      return val
    }

    if(idx === this.length-1) {
    let val = this.tail.val;
    let prev = this._get(idx-1)
    prev.next = null
    this.tail = prev
    this.length -= 1
    return val
    }

    //normal case value in middle
    let node_at_index_val = this._get(idx).val
    let previous_node = this._get(idx-1)
    previous_node.next = previous_node.next.next
    return node_at_index_val
  }

  /** average(): return an average of all values in the list */
  // If you console.log this the average will show. For some reason it won't actually return a value
  average() {
    if (this.length === 0) return 0;

    let currentNode = this.head
    let sum = 0;
    let count = 0;
    let average = sum/count
    while(currentNode && currentNode.val !== null) {
      sum += currentNode.val
      count += 1
      currentNode = currentNode.next
    }
    
    return average
  }
}

let fruits = new LinkedList();
fruits.push(5)
fruits.push(7)
fruits.push(8)
fruits.average()





module.exports = LinkedList;
