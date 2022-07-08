// console.log('Hello from JS...')

// Printing in JS
// 1. Error
// console.error('This is an error')
// console.warn('This is an warning')
// console.log('Normal Message')

// primtive data types
// let marks = 450
// let name = 'John'
// let isCool = false
// let x = null
// let y = undefined

// Type of --> tyepof operator
// console.log(typeof marks)
// console.log(typeof name)
// console.log(typeof isCool)

// console.log(name.toUpperCase())
// console.log(name.toLowerCase())

// console.log(isCool.)


// ARRAYS
// const myArray = new Array(5)
// const myArray = new Array(50, 100, 150, 200, 250)
// myArray[6] = 'New Value'
// console.log(myArray)
// console.log(myArray)
// console.log('Value at index 2 is ', myArray[2])

// const myArray2 = new Array(100, 'myString', true, null, undefined)
// console.log(myArray2)

// const myArray3 = new Array(100, 200, new Array(10, 15, 20), 500)
// console.log(myArray3)

// myArray.push(500)
// myArray.push(550)
// console.log(myArray)

// myArray.pop()
// console.log(myArray)

//  ARRAYS ARE REFERENCE TYPES

// const newArray1 = [10, 20, 30, 40, 50]
// newArray1[6] = [10, 20, 30, 40]
// console.log(newArray1)
// console.log(newArray1[6][1])
// // const newArray2 = [ ...newArray1 ]

// newArray2.pop()
// console.log(newArray2)
// console.log(newArray1)

// newArray1.splice(2, 1)
// console.log(newArray1)

// SPLICE
// const arr = [10, 20, 30, 40, 50, 60]
// console.log(arr)

// case 1
// arr.splice(1, 1)
// console.log(arr)


// case 2 -
// arr.splice(1, 2)
// console.log(arr)

// case 3 - 
// arr.splice(1, 3, "Apple", "Mango", "Banana", "Grapes")
// console.log(arr)


// FUNCTIONS

// function sum(a, b) {
//     return a/b
// }

// const ans1 = sum(10, 20)
// // const ans2 = sum('Hello', 'Bye')
// const ans2 = sum(true, false)
// // console.log(ans1)
// console.log(ans2)


// ES6 => Functions
const addAndSquare = (num1, num2) => {
    if(typeof num1 == 'number' && typeof num2 == 'number') {
        const sum = num1 + num2
        return sum * sum
    } else {
        return 'NOT POSSIBLE'
    }   
}

// const add = (a, b) => a+b

const add = (a, b) => typeof a === 'number' && typeof b === 'number' ? console.log(a+b) : console.log('NOT POSSIBLE')

add(10, 10)

add('String One', 'String Two')


10 > 5 ? console.log('TRUE') : console.log('FALSE')

// const result1 = addAndSquare(2, 3)
// const result2 = addAndSquare('String 1', 'String 2')
// // console.log(result1)
// // console.log(result2)

// const result3 = add(undefined, undefined)
// console.log(result3)

// console.log(result4)

// console.log(typeof null)
// let someValue = undefined
// console.log(someValue)

// let a = 100
// a = "Arun"
// console.log(typeof a)

// if(100 === '100') {
//     console.log('POSSIBLE')
// } else {
//     console.log('NOT POSSIBLE')
// }