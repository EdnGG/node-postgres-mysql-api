const faker = require('faker')


class ProductsServices {

  constructor() {
    this.products = []
    this.generate()
  }
  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price()),
        image: faker.image.imageUrl()
      })
    }

  }

  create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      // name: data.name,
      ...data
      // price: data.price,
      // image: data.image
    }
    this.products.push(newProduct)
    return newProduct

  }

  find() {
    return this.products
  }

  findOne(id) {
    return this.products.find(product => product.id === id)
  }
  update() {

  }
  delete() {

  }

}

module.exports = ProductsServices;
