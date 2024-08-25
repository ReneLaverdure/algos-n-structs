const linkedList = require('../../linked-list/linked-list-v1')

let list = new linkedList()

beforeEach(() => {
    list.push(10)
    list.push(20)
    list.push(30)
    list.push(40)
    list.push(50)
    list.push(60)
    list.push(70)
    list.push(80)
    list.push(90)
    list.push(100)
})

afterEach(() => {
    list = new linkedList()
})

describe('linked list is a class', () => {
    it('linked list is a class', () => {
        expect(typeof list).toBe('object')
    })
})

describe('list a push value onto the end', () => {
    it('has a function called push', () => {
        expect(typeof list.push).toBe('function')
    })
    it('push adds value to the end of list', () => {
        list.push(110)
        list.push(120)
        expect(list.head.val).toBe(10)
        expect(list.tail.val).toBe(120)
    })
})

describe('list pop value off the end', () => {
    it('has a function called pop', () => {
        expect(typeof list.pop).toBe('function')
    })
    it('pop removes the value off end of list ', () => {
        expect(list.pop().val).toBe(100)
    })
    it('return false when list is 0', () => {
        list.pop()
        list.pop()
        list.pop()
        list.pop()
        list.pop()
        list.pop()
        list.pop()
        list.pop()
        list.pop()
        list.pop()
        list.pop()
        list.pop()
        expect(list.pop()).toBe(null)
    })

})

describe('list shift remove value from head', () => {
    it('has a function called shift', () => {
        expect(typeof list.shift).toBe('function')
    })
    it('removes value off the front', () => {
        expect(list.shift().val).toBe(10)
        expect(list.head.val).toBe(20)
    })
    it('returns null if list is empty', () => {
        list.shift()
        list.shift()
        list.shift()
        list.shift()
        list.shift()
        list.shift()
        list.shift()
        list.shift()
        list.shift()
        list.shift()
        list.shift()
        expect(list.shift()).toBe(null)
    })
})

describe('list unshift adds value to the front', () => {
    it('unshift function exist', () => {
        expect(typeof list.unshift).toBe('function')
    })
    it('add value to the front of list', () => {
        expect(list.unshift(500)).toBe(list)
        expect(list.head.val).toBe(500)
    })
})

describe('list get function return val at idx', () => {
    it('get function exist', () => {
        expect(typeof list.get).toBe('function')
    })
    it('get return value at index', () => {
        expect(list.get(5).val).toBe(60)
    })
    it('handles invailid input', () => {
        expect(list.get(15)).toBe(false)
    })
})

describe('list set function replace val at idx', () => {
    it('set function exixt', () => {
        expect(typeof list.set).toBe('function')
    })
    it('set return boolean changing the val', () => {
        expect(list.set(0, 111)).toBe(true)
        expect(list.head.val).toBe(111)
        expect(list.set(4, 505)).toBe(true)
        expect(list.get(4).val).toBe(505)
    })

    it('handles invailid input', () => {
        expect(list.set(15, 404)).toBe(false)
    })
})

describe('list insert function adds val into list', () => {
    it('insert function exist', () => {
        expect(typeof list.insert).toBe('function')
    })
    it('insert node into list', () => {
        let startingLength = list.length
        expect(list.insert(5, 55)).toBe(true)
        expect(list.get(5).val).toBe(55)
        expect(list.length).toBeGreaterThan(startingLength)
    })
    it('handles invaild inputs', () => {
        expect(list.insert(50, 404)).toBe(false)
    })
})

describe('list remove function deletes val from list', () => {
    it('remove function exist', () => {
        expect(typeof list.remove).toBe('function')
    })
    it('remove node from list at idx', () => {
        expect(list.remove(6).val).toBe(70)
        expect(list.print()).toEqual([10, 20, 30, 40, 50, 60, 80, 90, 100])
        expect(list.remove(0).val).toBe(10)
        expect(list.print()).toEqual([20, 30, 40, 50, 60, 80, 90, 100])
        expect(list.head.val).toBe(20)
    })
})

describe('list reverse function flips list', () => {
    it('reverse function exist', () => {
        expect(typeof list.reverse).toBe('function')
    })
    it('list is reversed', () => {
        list.reverse()
        expect(list.print()).toEqual([100, 90, 80, 70, 60, 50, 40, 30, 20, 10])
    })
})

describe('list have print finction', () => {
    it('print function exist', () => {
        expect(typeof list.print).toBe('function')

    })
    it('print list values ', () => {

        expect(list.print()).toEqual([10, 20, 30, 40, 50, 60, 70, 80, 90, 100])
    })

})
