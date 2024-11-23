import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import productRouter from './Router/product.router.js'
import userRoutes from './Router/user.router.js'
import imageRouter from './Router/image.router.js'
import mongooseDB from './config/db.js'


const PORTNAME = process.env.PORT
console.log(PORTNAME)
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use("/uploads",express.static("./public/uploads"))


// connect DB
mongooseDB()


// router

app.use("/api",productRouter)
app.use("/api",userRoutes)
app.use("/api",imageRouter)


app.listen(PORTNAME,()=>{
    console.log("server Started successfully  hello")
})