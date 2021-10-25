const faker = require('faker')
const Boom = require('@hapi/boom')

const pool = require('../libs/postgres.pool')
const sequelize = require('../libs/sequelize')


class ProductsServices {

  constructor() {
    this.products = []
    this.generate()
    this.sequelize = sequelize
    this.pool = pool
    this.pool.on('error', (err) => console.error(err))
  }
  async generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price()),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean()
      })
    }

  }

  async create(data) {
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

  async find() {
    const query = `SELECT * FROM tasks`
    // const rta = await this.pool.query(query)
    // return rta.rows
    const [data, metadata] = await this.sequelize.query(query)
    return {
      data,
      metadata
    }
  }

  async findOne(id) {
    const product = this.products.find(item => item.id === id);
    if(!product){
      throw Boom.notFound('Product not found');
    }
    if(product.isBlock){
      throw Boom.conflict('Product is blocked');
    }
    return product
  }

  async update(id, payload) {
    const index = this.products.findIndex(product => product.id === id)
    if(index === -1){
      throw Boom.notFound('Product not found');
    }
    const product = this.products[index]
    this.products[index] = {
      ...product,
      ...payload
    }
    return this.products[index]
  }
  async delete(id) {
    const index = this.products.findIndex(product => product.id === id)
    if(index === -1){
      throw Boom.notFound('Product not found');
    }
    this.products.splice(index, 1)
    return { message: `Product with ID:${id} has been deleted successfull`}
   }

}

module.exports = ProductsServices;
