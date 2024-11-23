import express from 'express'
import { productDeltetController, productgetController, productpostController, productupdateController } from '../Controller/productController.js'

const productRouter = express.Router()

productRouter.get('/product',productgetController).post("/product",productpostController).post("/productupdate",productupdateController).post("/productdel",productDeltetController)


export default productRouter
