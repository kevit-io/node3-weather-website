console.log("client side file is loaded")
const fetch=require('node-fetch')
fetch('http://puzzle.mead.io/puzzle').then((response)=>{
    response.json().then((data)=>{
        console.log(data)
    })
})
const weatherForm=document.querySelector('form') // to do things for user interact with elements

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
console.log('testing!! ')
})
