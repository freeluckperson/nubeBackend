import Product from '../models/products.model.js'

export const getProducts = async (_, res) => {
  try {
    const products = await Product.find()
    res.status(200).json(products)
  } catch (error) {
    res.status(500).json({error: 'Failed to get product'})
  }
 }

export const createProducts = async (req, res) => {
  const {name, description, price} = req.body
  const product = await new Product({
    name,
    description,
    price
  })
  try {
    product.save()
    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({error: 'could not be created'}) 
  }
}

export const updateProducts = async (req, res) => {
  const { id } = req.params
  
  try {
    const product = await Product.findByIdAndUpdate(id, req.body, {new:true})
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update product' })
  }
}

export const deleteProducts = async (req, res) => {
  const {id} = req.params
  try {
    const product = await Product.findByIdAndDelete(id)
    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({error:'could not be delete'})
  }
}

export const findProduct = async (req, res) => {
  const {id} = req.params
  try {
    const product = await Product.findById(id)
    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({error:'could not be find'})
  }
}