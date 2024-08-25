const numArray = [
  0, 0, 0, 3, 4, 5, 567, 455, 87, 4, 7, 8, 15, 65, 3, 4, 5, 7, 1, 1, 1, 2, 3, 2, 2, 34, 54, 65, 7, 78, 87, 4, 43, 5, 65, 7, 8, 2, 34
]


function generateNumArr(length, min, max) {
  let arr = new Array(length)
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(Math.random() * (max - min + 1) + min)
  }
  return arr
}

export {
  numArray,
  generateNumArr
}


