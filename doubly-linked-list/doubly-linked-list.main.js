class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val) {
        let node = new Node(val)
        //check if list is empty
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }

        this.length++
        return this
    }
    pop() {
        if (this.length === 0) {
            return undefined
        }

        let removedNode = this.tail
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = removedNode.prev
            this.tail.next = null
            removedNode.prev = null
        }
        this.length--
        return removedNode
    }
    shift() {
        if (this.length === 0) return undefined

        let shiftNode = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {

            this.head = shiftNode.next
            this.head.prev = null
            shiftNode.next = null
        }

        this.length--
        return shiftNode
    }
    unshift(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {

            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }

        this.length++
        return this
    }
    get(idx) {
        if (idx < 0 || idx >= this.length) {
            return null
        }
        let current, count;
        if (idx <= Math.floor(this.length / 2)) {
            current = this.head
            count = 0
            while (count != idx) {
                current = current.next
                count++
            }

        } else {
            current = this.tail
            count = this.length - 1
            while (count != idx) {
                current = current.prev
                count--
            }


        }

        return current
    }
    set(idx, val) {
        let node = this.get(idx)

        if (node != null) {
            node.val = val
            return true
        }

        return false
    }
    insert(idx, val) {
        if (idx < 0 || idx >= this.length) {
            return undefined
        }


        if (idx === 0) {
            this.unshift(val)
            return true
        }

        if (idx === this.length) {
            this.push(val)
            return true
        }
        //setup nodes
        let newNode = new Node(val)
        let prevNode = this.get(idx - 1)
        let nextNode = prevNode.next

        newNode.next = nextNode
        newNode.prev = prevNode
        prevNode.next = newNode
        nextNode.prev = newNode

        this.length++
        return true

    }
    remove(idx) {
        if (idx < 0 || idx >= this.length) {
            return undefined
        }

        if (idx === 0) {
            this.shift()
            return true
        }

        if (idx === this.length) {
            this.pop()
            return true
        }

        let removedNode = this.get(idx)
        let nextNode = removedNode.next
        let prevNode = removedNode.prev

        nextNode.prev = prevNode
        prevNode.next = nextNode
        removedNode.next = null
        removedNode.prev = null

        this.length--
        return removedNode
    }
    print() {
        let arr = []
        let current = this.head
        while (current) {
            arr.push(current.val)
            current = current.next
        }

        console.log(arr)
    }
}

let list = new DoublyLinkedList()

list.push(10)
list.push(12)
list.push(15)
list.push(20)
list.unshift(10)
list.unshift(12)
console.log(list.get(3).val)
list.insert(3, 500)
console.log(list.get(3))
console.log(list.remove(5))
list.print()
list.remove(2)
list.print()
