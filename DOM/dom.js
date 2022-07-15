

// Architecture of DOM
// console.dir(document)

const headerTitle = document.all[10]
// setTimeout(() => {
//     // Change the text value of header-title
//     headerTitle.textContent = 'New Item Lister'
// }, 3000)

// // Identifier Methods
// const mainHeader = document.getElementById('main-header')
// console.log(mainHeader)

// const listItems = document.getElementsByClassName('list-group-item')
// console.log(listItems)

// // Changing the CSS using JS
// for(let i=0; i < listItems.length; i++) {
//     i%2 === 0 ? listItems[i].style.backgroundColor = 'gray' : listItems[i].style.backgroundColor = 'white'
// }

// const headingTwo = document.getElementsByTagName('h2')
// console.log(headingTwo)

// const list = document.querySelectorAll('#items')
// console.log(list)

// const listItems = document.querySelectorAll('.list-group-item')
// console.log(listItems)

// const headingTwo = document.querySelectorAll('h2')
// console.log(headingTwo)


// EVENTS

// identifier.addEventListner('eventName', () => { ...what to do })

// const onClickHandler = () => {
//     console.log('Button was clicked!')
// }

// document.querySelector('#btn').addEventListener('click', onClickHandler)

// const submitBtn = document.getElementById('submit-btn')
// submitBtn.addEventListener('click', (e) => {
//     e.preventDefault()
//     console.log('Data SavED in the DB')
//     console.log(e)
// })

// const btn = document.getElementById('btn')
// btn.addEventListener('click', (event) => {
//     console.log(event)
//     console.log('Data SavED in the DB')
// })

// document.querySelector('#my-input').addEventListener('focus', () => {
//     console.log('FOCUSED!')
// })

// document.querySelector('#my-input').addEventListener('blur', () => {
//     console.log('BLURRED!')
// })

// document.querySelector('#my-input').addEventListener('copy', () => {
//     console.log('COPIED!')
// })

// document.querySelector('#my-input').addEventListener('cut', () => {
//     console.log('CUT!')
// })

// document.querySelector('#my-input').addEventListener('paste', () => {
//     console.log('PASTED!')
// })


// document.querySelector('#my-input').addEventListener('keydown', (e) => {
//     console.log(e.target.value)
// })

// document.querySelector('#my-input').addEventListener('keydown', () => {
    
// })

// document.querySelector('#submit-btn').addEventListener('click', (e) => {
//     e.preventDefault()
//     const textValue = document.querySelector('#my-input').value
//     console.log(textValue)
// })

// RELATIONSHIPS

// 1. parent
// console.log( document.querySelector('#heading-one').parentElement.parentElement.parentElement )

// // 2.children
// console.log( document.querySelector('#main').children )

// siblings
// #text - Identation
//console.log( document.querySelector('#my-form').previousSibling )
//console.log( document.querySelector('#my-form').nextSibling )

// console.log( document.querySelector('#my-form').previousElementSibling.previousElementSibling )
// console.log( document.querySelector('#my-form').nextElementSibling )


// document.querySelector('#heading-one').textContent = 'Add New Items'

// document.querySelector('#heading-one').innerHTML = '<h4>This is the updated List</h4>'


// Children
// console.log( document.querySelector('#items').children )
// console.log( document.querySelector('#items').firstChild )
// console.log( document.querySelector('#items').firstElementChild )

// let myDiv = document.createElement('div')
// myDiv.setAttribute('id', 'my-div-id')
// myDiv.setAttribute('class', 'my-div-class')

// // Append the text to the elt
// myDiv.textContent = 'This is my div'

// // Render in the UI
// document.querySelector('#my-container').appendChild(myDiv)

// console.log(myDiv)


// ITEM LISTER APP

// document.querySelector('#submit-btn').addEventListener('click', (e) => {
//     e.preventDefault()
//     const textValue = document.querySelector('#my-input').value

//     const li = document.createElement('li')
//     li.setAttribute('class', 'list-group-item')
//     li.textContent = textValue

//     // Append the li to the ul
//     document.querySelector('#items').appendChild(li)
// })