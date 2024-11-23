import {products} from '../model/productItems.model.js'

const productgetController = async(req,res)=>{

    try {
        
        const product = await products.find()
        res.status(200).json({message:"successfully get the product",product})
    } catch (error) {
        res.status(400).json({message : "internal server error"})

        console.log("error--->",error)
        
    }

  
}
const productpostController = async(req,res)=>{

    try {

        const {name,image,description,category} = req.body

        const newProduct = new products({name,image,description,category})

        await newProduct.save()

        res.status(200).json({success:true,message: "successfully added "})
        
    } catch (error) {

        res.status(400).json({message : "internal server error"})

        console.log("error--->",error)
        
    }

}
const productupdateController = async(req,res)=>{

    

    const {id,data} = req.body

    try {
        
        const updateProduct = await products.findByIdAndUpdate(id,data,{new:true})
        if (!updateProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({success:true ,message: "Product updated successfully", product: updateProduct })
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ message: "Internal server error" });
        
    }

}


const productDeltetController = async(req,res)=>{

    const {_id} = req.body

    try {


       await products.findByIdAndDelete(_id)

        res.status(200).json({success:true,message:"successfully deleted"})
        
    } catch (error) {

        console.error("Error delete product:", error);
        res.status(500).json({ message: "Internal server error" });
        
    }
}




export {productgetController,productpostController,productupdateController,productDeltetController}