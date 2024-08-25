class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val) {
        let node = new Node(val)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }


        this.length++
        return this
    }
    pop() {
        if (!this.head) {
            return undefined
        }

        let current = this.head
        let newTail = current
        while (current.next) {
            newTail = current
            current = current.next
        }

        newTail.next = null
        this.tail = newTail
        this.length--
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return current
    }
    shift() {
        if (!this.head) return undefined
        let temp = this.head
        this.head = this.head.next
        this.length--
        if (this.length === 0) {
            this.tail = null
        }
        return temp
    }
    unshift(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {

            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
    get(idx) {
        if (idx < 0 || idx >= this.length) return null
        let i = 0
        let current = this.head
        while (i !== idx) {
            current = current.next
            i++
        }
        return current
    }
    set(idx, val) {
        let node = this.get(idx)
        if (node) {
            node.val = val
            return true
        }
        return false
    }
    insert(idx, val) {
        if (idx < 0 || idx > this.length) return false
        if (idx === this.length) {
            this.push(val)
            return true
        }
        if (idx === 0) {
            this.unshift(val)
            return true
        }

        let prev = this.get(idx - 1)
        let newNode = new Node(val)
        newNode.next = prev.next
        prev.next = newNode
        this.length++
        return true
    }
    remove(idx) {
        if (idx < 0 || idx > this.length) return undefined
        if (idx === this.length - 1) {
            return this.pop()
        }
        if (idx === 0) {
            return this.shift()
        }

        let prev = this.get(idx - 1)
        let removedNode = prev.next
        prev.next = removedNode.next
        this.length--
        return removedNode
    }
    reverse() {
        let current = this.head
        this.head = this.tail
        this.tail = current
        let nextNode;
        let prev = null;

        for (let i = 0; i < this.length; i++) {
            nextNode = current.next
            current.next = prev
            prev = current
            current = nextNode
        }
        return this
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
    traverse() {
        let current = this.head

        while (current) {
            console.log(current.val)
            current = current.next
        }
    }

}

let list = new SinglyLinkedList()
list.push(1)
list.push(2)
list.push(3)

//list.unshift(10)
//list.unshift('hello')

//list.traverse()
//console.log(list.get(0))
//console.log(list.set(1, 'new valuese'))
//list.insert(3, 'inserted')
//list.traverse()
//console.log(list.remove(3))
list.traverse()
list.reverse()
list.print()


module.exports = SinglyLinkedList

