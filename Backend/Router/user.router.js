import express from 'express'
import { userDeltetController, userLoginController, userRegisterController } from '../Controller/userController.js'

const userRoutes = express.Router()

userRoutes.post("/userlogin",userLoginController).post("/userregister",userRegisterController).post("/userdel",userDeltetController)


export default userRoutes