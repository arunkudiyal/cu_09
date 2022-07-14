

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

document.querySelector('#submit-btn').addEventListener('click', (e) => {
    e.preventDefault()
    const textValue = document.querySelector('#my-input').value
    console.log(textValue)
})