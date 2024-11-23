import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import productRouter from './Router/product.router.js'
import userRoutes from './Router/user.router.js'
import imageRouter from './Router/image.router.js'
import mongooseDB from './config/db.js'


const PORTNAME = process.env.PORT || 4000
console.log(PORTNAME)
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors({
    origin: "*", 
    credentials: true
}))
app.use("/uploads",express.static("./public/uploads"))


// connect DB
mongooseDB()


// router

app.use("/api",productRouter)
app.use("/api",userRoutes)
app.use("/api",imageRouter)



app.get("/",(req,res)=>{
    res.send("hello world")
})






app.listen(PORTNAME,()=>{
    console.log("server Started successfully  hello")
})