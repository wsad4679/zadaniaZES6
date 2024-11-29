const myReverse = (text) => text.split('').reverse('').join('')
const myUpperCase = (text) => text.toUpperCase()
const myRemove = (text) => text.replace(/[^a-zA-Z0-9\s]/g, "")//to cos usuwa wszytkie inne znaki niz spacje, cyfry i litery

const processText = (text, { 
    isReversed = false, 
    isUperrCased = false,
    isRemoved = false
} = {}) =>{
    
    let result = text

    if(isReversed){
        result = myReverse(result)
    }

    if(isUperrCased){
        result = myUpperCase(result)
    }

    if (isRemoved){
        result = myRemove(text)
    }

    return `przetworzony tekst: ${result}`
} 

const text = "k@o#r!n%e*l"

const options ={
    isReversed: true,
    isUperrCased: true,
    isRemoved: false
}

console.log(processText(text, options))