import express from 'express'
import { images } from '../model/images.model.js'
import multer from 'multer'

const imageRouter = express.Router()


const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,"./public/uploads/")
    },
    filename:(req,file,cb)=>{
        cb(null,`${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({storage})


imageRouter.post("/image",upload.single("sktimage"),async(req,res)=>{
    
    
    try {
console.log("hi there its not working")

console.log(req.file)
        const image = req.file.filename
        const{category} = req.body
            const newImage = new images({image,category})

    await newImage.save()

    res.status(200).json({message:"successfully added image",success:true})
    } catch (error) {

        console.log(error)
        res.status(400).json({message:"internal server error",success:false})
        
    }


})

imageRouter.get("/image",async(req,res)=>{
    
    
    try {   

    const image = await images.find()

    res.status(200).json({image,success:true})    
    } catch (error) {                                   

        console.log(error)
        res.status(400).json({message:"internal server error",success:false})
        
    }


})

imageRouter.post("/image/:category",async(req,res)=>{
    try {

        const{category} = req.params
        const image = await images.find({category})

        if(!image){
            return res.status(404).json({message:"image not found",success:false})
        }

        res.status(200).json({image,success:true})
        
    } catch (error) {
        res.status(400).json({message:"internal server error",success:false})
    }
})

export default imageRouter