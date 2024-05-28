// -------------------------------------
// console.log('Hello there');
// -------------------------------------

const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const app = express();
// const port = process.env.PORT || 3000;

app.use(json());

app.get('/api/products', async (req, res) => {
  // console.log('Hello from Node API');
  // res.send('<h1>Hello from Node API Server Updated !</h1>');
  // res.send('<h1>Products :-</h1>');
  try {
    const products = await find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/api/product/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/api/products', async (req, res) => {
  try {
    const product = await create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  console.log(req.body);
  res.send(req.body);
});

// update a product
app.put('/api/product/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const updatedProduct = await findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// delete a product
app.delete('/api/product/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const product = await findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

connect(
  'mongodb+srv://umeshjagtap7866:UW3v2tk4Gtp3P1bz@backenddb.al5xeiy.mongodb.net/?retryWrites=true&w=majority&appName=backendDB'
)
  .then(() => {
    console.log('Connected to database!');
    app.listen(3000, () => {
      console.log('Server is up and running on port ' + 3000);
    });
  })
  .catch(() => {
    console.log('Connection Failed!');
  });
