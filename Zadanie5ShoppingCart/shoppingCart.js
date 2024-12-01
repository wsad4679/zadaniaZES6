class Cart{

    constructor(products = []){
        this.list = products
    }


    showCart(){
        
        this.list.forEach(product => {
            console.log(`Nazwa: ${product.name}, Cena: ${product.price}, Ilość: ${product.quantity}  `)
        });

    }

    addProduct(product){
        this.list.push(product)
    }

    removeProduct(productName){
        let i = 0
        this.list.forEach(product => {
            if (product.name == productName)
                {
                    this.list.splice(i,1)
                }
            i++
        });
    }


}

const lista = new Cart()

lista.addProduct({name: 'Jabko', price: 12, quantity: 1})
lista.addProduct({name: 'Jabko', price: 12, quantity: 1})
lista.addProduct({name: 'Jabko', price: 12, quantity: 1})
lista.removeProduct("Jabko")
lista.showCart()

