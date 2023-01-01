const express = require("express");
const mongoose = require("mongoose");
const { Schema } = require("mongoose");

var mongo = require("mongodb");
const { MongoClient } = require("mongodb");

const app = express();

async function initializeDbConnection() {
  try {
    await mongoose.connect(
      "mongodb+srv://aman:admin@neog-try.s7bkzey.mongodb.net/inventory?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("db connected");
  } catch (err) {
    console.log("db connection error", err);
  }
}

initializeDbConnection();

// New Schema
const productSchema = new Schema({
  name: String,
  price: Number,
});
// New Model
const Product = mongoose.model("Product", productSchema);

// Adding a product document to model
const Watch = new Product({ name: "Rolex", price: 150000 });
Watch.save()
  .then((savedWatch) => console.log(savedWatch))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {});

app.listen(3000, () => {
  console.log("server started");
});

module.exports = { initializeDbConnection };
