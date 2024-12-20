import { createContext, useEffect, useState } from "react";
import axios from 'axios'

import { toast } from "react-toastify";



export const productsData = createContext(null)




export const ProductDataProvider = ({children})=>{
    const [value,setValue] = useState([])
    const [image,setImage] = useState([])


    const [themeMode,setThemeMode] = useState("light")
    
    function fetchproductData(){

        try {
            
            axios.get(`${import.meta.env.VITE_API_URL}/api/product`).then((res)=>{
                const resData = res.data.product

                setValue(resData)

               
            })
        } catch (error) {

            console.log(error)
            
        }

    }
    function fetchImage(){

        try {
            
            axios.get(`${import.meta.env.VITE_API_URL}/api/image`).then((res)=>{
                const resData = res.data.image


                setImage(resData)

               
            })
        } catch (error) {

            console.log(error)
            
        }

    }



    function gettoken(){
       return localStorage.getItem("token")
    }


    
  function removeCard(_id){
    try {

        axios.post(`${import.meta.env.VITE_API_URL}/api/productdel`,{_id}).then((res)=>{

         


          if(res.data.success == true){
              toast(res.data.message)
              
              
            }

            fetchproductData()
            
           
        })
        
    } catch (error) {

        console.log(error)
        
    }
}

function filterOut(category){
    try {

       
        
        axios.post(`${import.meta.env.VITE_API_URL}/api/image/${category}`).then((res)=>{
         console.log(res)

         setImage(res.data.image)

           
        })
    } catch (error) {
        console.log(error)
    }
}



    useEffect(()=>{

        fetchproductData()
        fetchImage()

    },[])
    

    return(
        <productsData.Provider value={{value,setValue,removeCard,themeMode,setThemeMode,gettoken,fetchproductData,image,filterOut,fetchImage}}>
                {children}
        </productsData.Provider>
    )
}