import { Router } from 'express'
import {
  getProducts,
  findProduct,
  createProducts, 
  updateProducts,
  deleteProducts
} from '../controllers/products.controller.js'

const router = Router()

router.get('/products', getProducts)

router.get('/products/:id', findProduct)

router.post('/products', createProducts)

router.put('/products/:id', updateProducts)

router.delete('/products/:id', deleteProducts);

export default router;
