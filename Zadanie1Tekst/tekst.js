const znaki = ["!", "@", "#", "$", "%", "^", "&", "*", "?"]
const myReverse = (text) => text.split('').reverse('').join('')
const myUpperCase = (text) => text.toUpperCase()
const myRemove = (text) => text.split('')

const processText = (text, { 
    isReversed = false, 
    isUperrCased = false,
} = {}) =>{
    
    let result = text

    if(isReversed){
        result = myReverse(result)
    }

    if(isUperrCased){
        result = myUpperCase(result)
    }

    return `przetworzony tekst: ${result}`
} 

const text = "kornel"

const options ={
    isReversed: false,
    isUperrCased: true,
}

console.log(processText(text, options))