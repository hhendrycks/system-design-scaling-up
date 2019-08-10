const pg = require('pg');
require('dotenv').config();
const pgClient = new pg.Client({
  host: 'ec2-18-220-176-102.us-east-2.compute.amazonaws.com',
  port: 5432,
  user: 'postgres',
  password: 'secretpassword',
  database: 'postgres'
});

pgClient.connect((err) => {
  if (err) console.log(err);
  else console.log("Connected to database!");
});

const db = {
  getByID: async (id) => {
    const product = await pgClient.query(
      `SELECT product.id, product.brand, product.name, product.rating, product.price, product.category, photoURLs.url FROM product INNER JOIN photoURLs ON product.id = ${id} AND product.photo = photoURLs.id;`
    );
    return product;
  },
  getProductsRelatedTo: async ({ category, id }) => {
    const products = await pgClient.query(
      `SELECT product.brand, product.name, product.rating, product.price, photoURLs.url FROM product INNER JOIN photoURLs ON product.category = '${category}' AND product.photo = photoURLs.id AND (product.id = ${id}) IS NOT TRUE LIMIT 9;`
    );
    return products;
  }
}

module.exports = db;