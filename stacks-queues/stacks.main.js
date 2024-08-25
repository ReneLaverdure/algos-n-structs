class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Stack {
    constructor() {
        this.length = 0
        this.first = null
        this.last = null

    }

    push(val) {
        let newNode = new Node(val)
        if (this.length === 0) {
            this.first = newNode
            this.last = newNode
        } else {
            let temp = this.first
            this.first = newNode
            this.first.next = temp
        }

        return ++this.length
    }

    pop() {
        if (this.length === 0) {
            return null
        }

        let temp = this.first

        if (this.first === this.last) {
            this.last = null
        }
        this.first = this.first.next
        this.size--
        return temp.val
    }

}
