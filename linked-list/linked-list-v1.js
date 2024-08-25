class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0
    }
    push(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }

        this.length++
        return this
    };
    pop() {
        if (!this.head) {
            return null
        }
        let current = this.head
        let tempTail = current

        while (current) {
            if (current.next === this.tail) {
                tempTail = current.next
                current.next = null
                this.tail = current
            }
            current = current.next
        }

        if (this.length === 1) {
            this.head = null
            this.tail = null

        }

        this.length--
        return tempTail
    }
    shift() {
        if (!this.head) {
            return null
        }
        let head = this.head
        this.head = head.next
        this.length--
        return head
    }
    unshift(val) {
        let newNode = new Node(val)
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
    }
    get(idx) {
        if (idx > this.length || idx < 0) {
            return false
        }
        let current = this.head
        for (let i = 0; i < idx; i++) {
            current = current.next
        }
        return current
    }
    set(idx, val) {
        if (idx > this.length || idx < 0) {
            return false
        }
        let settingNode = this.get(idx)
        settingNode.val = val
        return true
    }

    insert(idx, val) {
        if (idx > this.length || idx < 0) {
            return false
        }
        let newNode = new Node(val)
        let insertionNode = this.get(idx - 1)
        newNode.next = insertionNode.next
        insertionNode.next = newNode
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
        let temp = this.get(idx - 1)
        let removedNode = temp.next
        temp.next = removedNode.next
        return removedNode
    }
    reverse() {
        let current = this.head
        this.head = this.tail
        this.tail = current
        let nextNode
        let prev = null

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
        return arr
    }

}


module.exports = LinkedList
