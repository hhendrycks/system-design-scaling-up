const  db = require('../db/hostedDb');

module.exports = {
  getProductsRelatedTo: async function(product) {
    const products = await db.getProductsRelatedTo(product);
    return products;
  },
  getOne: async function(id) {
    const product = await db.getByID(id);
    return product;
  }
};
