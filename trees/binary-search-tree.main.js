class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val)

        if (!this.root) {
            this.root = newNode
            return this
        }

        let current = this.root
        while (true) {
            if (val === current.val) return undefined
            if (val < current.val) {
                if (current.left === null) {
                    current.left = newNode
                    return this
                }
                current = current.left

            }

            if (val > current.val) {
                if (current.right === null) {
                    current.right = newNode
                    return this
                }
                current = current.right
            }
        }
    }
    find(val) {
        if (this.root === null) return false
        let current = this.root
        let found = false
        while (current && !found) {
            if (val < current.val) {
                current = current.left
            } else if (val > current.val) {
                current = current.right
            } else {
                found = true
            }
        }

        if (!found) return undefined
        return current
    }
    contains(val) {
        if (this.root === null) return false
        let current = this.root
        let found = false
        while (current && !found) {
            if (val < current.val) {
                current = current.left
            } else if (val > current.val) {
                current = current.right
            } else {
                return true
            }
        }

        return false
    }
    bfs() {
        let data = []
        let queue = []
        let node = this.root
        queue.push(this.root)
        while (queue.length) {
            node = queue.shift()
            data.push(node.val)
            if (node.left) {
                queue.push(node.left)
            }

            if (node.right) {
                queue.push(node.right)
            }
        }
        return data
    }
    dfsPreOrder() {
        let data = []
        function traverse(node) {
            data.push(node.val)
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
        }
        traverse(this.root)
        return data
    }

    dfsPostOrder() {
        let data = []
        function traverse(node) {

            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
            data.push(node.val)
        }
        traverse(this.root)
        return data
    }
    dfsInOrder() {
        let data = []
        function traverse(node) {

            if (node.left) traverse(node.left)
            data.push(node.val)
            if (node.right) traverse(node.right)
        }
        traverse(this.root)
        return data
    }
}

let tree = new BinarySearchTree()

tree.insert(10)
tree.insert(5)
tree.insert(15)
tree.insert(7)
tree.insert(3)
console.log(tree)

console.log(tree.find(7))
console.log(tree.find(100))
console.log(tree.contains(3))
console.log(tree.contains(100))
console.log(tree.bfs())
console.log(tree.dfsPreOrder())
console.log(tree.dfsPostOrder())
console.log(tree.dfsInOrder())
