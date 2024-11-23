
import { useContext } from 'react'
import SingleCard from './SingleCard.jsx'
import { productsData } from '../Context/Storeproduct.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function AllCard() {

  const {value,setValue,removeCard} = useContext(productsData)

  return (
    <>


    <div className=' w-[1111px] bg-slate-300  dark:bg-slate-900  pt-10 flex justify-center pb-20 items-center mx-auto'>

      <div className='w-[100%]   flex flex-col items-center justify-center '>
    <ToastContainer/>

  {/* {console.log(value)} */}


    {value.length == 0 ? <h1 className=' text-center m-10 text-blue-500 font-bold text-2xl' >No place Added Yet </h1>:  <h1 className='  mt-15 py-16 text-blue-500 font-bold text-4xl' > <h1>Places to visit in Surkhet</h1></h1>}



      
    <div className=' w-full flex items-center justify-between   gap-10 flex-wrap '>

      {

        
        value.map((product)=>(
          <div key={product._id} >

            

            <SingleCard name={product.name} description={product.description} image={product.image} id={product._id} value = {value} setValue = {setValue} removeCard={removeCard}/>
          </div>
        ))
      }
    </div>
      </div>


    </div>
    </>
  )
}

export default AllCard