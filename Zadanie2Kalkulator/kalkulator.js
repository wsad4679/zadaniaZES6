class Calculator{
    add(a, b){
        return a + b
    }

    substruct(a, b){
        return a - b
    }

    multiply(a, b){
        return a * b
    }

    divide(a, b){
        return a / b
    }
}
const dzialania = new Calculator()
dzialania.add(12, 34)
dzialania.divide(12, 34)
dzialania.multiply(12, 34)

console.log(dzialania.substruct(12, 34)
)
