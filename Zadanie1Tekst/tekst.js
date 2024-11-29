const znaki = ["!", "@", "#", "$", "%", "^", "&", "*", "?"]
const myReverse = (text) => text.split('').reverse('').join('')
const myUpperCase = (text) => text.toUpperCase()
const myRemove = (text) => text.split('')

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

    if(isRemoved){
        let ciagZnakow = text.split()
        for(i = 0; i <= ciagZnakow.length; i++){
            znaki.forEach(znak => {
                if(znak == ciagZnakow[i])
                {
                    ciagZnakow.splice(i,2)
                }
            });
        }
        ciagZnakow.join('')
        console.log(ciagZnakow)
    }

    return `przetworzony tekst: ${result}`
} 

const text = "kor!nel"

const options ={
    isReversed: false,
    isUperrCased: false,
    isRemoved: true
}

console.log(processText(text, options))