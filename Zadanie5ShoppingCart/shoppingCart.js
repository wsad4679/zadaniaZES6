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


}

const lista = new Cart()

lista.addProduct({name: 'Jabko', price: 12, quantity: 1})
lista.addProduct({name: 'Jabko', price: 12, quantity: 1})
lista.addProduct({name: 'Jabko', price: 12, quantity: 1})
lista.showCart()

