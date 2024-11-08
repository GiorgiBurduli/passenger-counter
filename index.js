
const countElement = document.querySelector('#count-el')
const saveElement = document.querySelector('#save-el')
let counter = 0



function increment(event) {
counter++
countElement.innerHTML = counter


    
}

function save() {
let savedCounts = `  ${counter} - `
saveElement.innerText += savedCounts
   
countElement.innerHTML = 0
counter = 0
    
}

 
