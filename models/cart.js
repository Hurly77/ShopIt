const fs = require('fs')

const path = require('path')

module.exports = class Cart {
  static addProduct(id) {a
    //fetch previous cart
    fs.readFile(p,(err, fileContent) => {
      let cart = {products: [], totalPrice: 0};
      if (!err) {
        cart = JSON.parse(fileContent)
      }
    })
    //anal the => Find existing product
    const existingProduct = cart.products.find(prod => prod.id === id)
    if(existingProduct) {
      
    }
    // add new 
    
  }
}