import Product from '../models/products.model.js'
import { uploadImag, deleteImag } from '../utils/cloudinary.js'
import fs from 'fs-extra'

export const getProducts = async (_, res) => {
  try {
    const products = await Product.find()
    res.status(200).json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const createProducts = async (req, res) => {
  try {
    const { stock, name, description, price  } = req.body

    const product = new Product({
      stock,
      name,
      description,
      price
    })

    if (req.files?.imag) {
      const results = await uploadImag(req.files.imag.tempFilePath)
      product.imag = {
        public_id: results.public_id,
        secure_url: results.secure_url
      }
      await fs.unlink(req.files.imag.tempFilePath)
    }

    await product.save()

    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateProducts = async (req, res) => {
  const { id } = req.params

  try {
    const product = await Product.findByIdAndUpdate(id, req.body, { new: true })
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteProducts = async (req, res) => {
  const { id } = req.params
  try {
    const product = await Product.findByIdAndDelete(id)

    if (!product) return res.status(404).json({ message: 'not exist' })
    await deleteImag(product.imag.public_id)

    res.status(200).json(product)

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const findProduct = async (req, res) => {
  const { id } = req.params
  try {
    const product = await Product.findById(id)
    if (!product) return res.status(404).json({ message: 'id no exist' })
    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}