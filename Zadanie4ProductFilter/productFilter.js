const products = [
    { name: 'Orange', price: 1.25, quantity: 2, category: 'Fruits' },
    { name: 'Milk', price: 0.99, quantity: 1, category: 'Dairy' },
    { name: 'Bread', price: 1.50, quantity: 1, category: 'Bakery' },
    { name: 'Chicken Breast', price: 5.99, quantity: 1, category: 'Meat' },
    { name: 'Broccoli', price: 2.00, quantity: 3, category: 'Vegetables' },
    { name: 'Rice', price: 1.20, quantity: 1, category: 'Grains' },
    { name: 'Apple Juice', price: 2.50, quantity: 2, category: 'Beverages' }
  ];

  class Filtering{
      static filterByCategory(categoryName){
          const filteredProducts = products.filter(product => product.category === categoryName)
          filteredProducts.forEach(product => {
            console.log(`Nazwa: ${product.name} Cena: ${product.price} Kategoria: ${product.category}`)
          });
      }

      static filterByPrice(lowPrice, maxPrice){
        
        let filteredProducts = products.filter(product => lowPrice<=product.price && product.price<=maxPrice)
        console.log("Zfiltrowane produkty: ")
        filteredProducts.forEach(product=>{
          console.log(`Nazwa: ${product.name} Cena: ${product.price} Kategoria: ${product.category}`)
        })
        
      }




  }

  Filtering.filterByCategory("Fruits")
  Filtering.filterByPrice(1, 2)

