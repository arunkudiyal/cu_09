// Step 1 - Create object pof XHR
const xhr = new XMLHttpRequest()
console.log(`Ready State - ${xhr.readyState}`)

// const variable = 'Ram'
// console.log(`Hi my name is ${variable} and I am 20 years old!`)

const url = `https://api.github.com/users`

// Step 2 - Open the porta; of communication b/w client & the server
xhr.open('GET', url)
console.log(`Ready State - ${xhr.readyState}`)

// document.querySelector('#some-value').addEventListener('click', () => {
//     console.log('CLIKCED')
// })

console.log(c)

// Step 3 - Execute the function when the request state changes
xhr.onreadystatechange  = () => {
    console.log(`Ready State - ${xhr.readyState}`)
    if(xhr.readyState === 4 && xhr.status === 200) {
        const objectResponse = JSON.parse( xhr.responseText )
        console.log(objectResponse)
        var output = ''
        for(let i=0; i < objectResponse.length; i++) {
                output += `
                <img src=${objectResponse[i].avatar_url} />
            `
        }
        console.log(output)
        document.querySelector('#my-container').innerHTML = output
    }
}

// Step 4 - Send the request
xhr.send()