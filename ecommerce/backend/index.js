const express = require('express');
const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

async function initializeDbConnection() {
  try {
    await mongoose.connect("mongodb+srv://aman:admin@neog-try.s7bkzey.mongodb.net/inventory?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("db connected")
  } catch (err) {
    console.log("db connection error", err)
  }
}

initializeDbConnection()

// New Schema
const productSchema = new Schema({
  name: String,
  price: Number
})
// New Model
const Product = mongoose.model('Product', productSchema)

app.get('/', (req, res) => {
  res.json({ msg: "Express server running" })
});

// fetch all products from db
app.get('/product', async (req, res) => {
    const products = await Product.find({});
    res.json({ products })
  });

// add new products
app.post('/product', (req, res) => {
  const { name, price } = req.body
  const Watch = new Product({ name, price })
  Watch.save().then(savedWatch => res.json(savedWatch)).catch(err => console.log(err))
})


app.listen(3000, () => {
  console.log('server started');
});