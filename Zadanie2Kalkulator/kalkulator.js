class Calculator{
    add(a, b){
        console.log(`Po dodaniu ${a} do ${b} wynik to: ${a+b}`)
    }

    substruct(a, b){
        console.log(`Po odjeciu ${a} od ${b} wynik to: ${a-b}`)
    }

    multiply(a, b){
        console.log(`Po pomnozeniu ${a} do ${b} wynik to: ${a*b}`)
    }

    divide(a, b){
        console.log(`Po podzieleniu ${a} do ${b} wynik to: ${a/b}`)
    }
}
const dzialania = new Calculator()

dzialania.add(12, 34)