
import { users } from "../model/user.model.js"
import jwt from "jsonwebtoken"


function jwtGenerator(email){
    return jwt.sign({email},process.env.SECREAT_KEY)
}

const userLoginController = async(req,res)=>{

const {email,password} = req.body

try {
    const user = await users.findOne({email,password})

    if(!user){
        return res.status(404).json({message:"user not found",success:false})
    }        

    const token = jwtGenerator(email)

    res.status(200).json({message:"user login successfully",success:true,token})
} catch (error) {
    console.log(error)
    res.status(400).json({message:"internal server error",success:false})    

    
}
    }


    


const userRegisterController = async(req,res)=>{

    const {name,email,password} = req.body

    try {
         const newUser = new users({name,email,password})

    await newUser.save()

    const token = jwtGenerator(email)

    res.status(200).json({message:"user created successfully",success:true,token})
    } catch (error) {
        console.log(error)
        res.status(400).json({message:"internal server error",success:false})
    }

   
    
}


const userDeltetController = async(req,res)=>{

    const {_id} = req.body

    try {
        await users.findByIdAndDelete(_id)

        res.status(200).json({message:"user deleted successfully",success:true})
    } catch (error) {
        res.status(400).json({message:"internal server error",success:false})
    }
    
}

export {userLoginController,userRegisterController,userDeltetController}