import { Link } from "react-router-dom"




function SingleCard({name,image,description,id,value,setValue,removeCard}) {


  const trim = description.substring(0,80)

  console.log(trim)



  return (
    <div className=' w-full h-[850px] bg-slate-200 dark:bg-slate-600 shadow-2xl hover:scale-105 hover:ease-in-out duration-1000 rounded-2xl p-6 dark:text-slate-100 '>
      
      

 
      <div className=' w-full h-[850px] flex flex-col gap-2 ' >
        <div className=' w-full h-[70%] overflow-hidden'>

        <img className=' w-full h-full object-cover  rounded-md  '  src={image} alt="" />
        </div>

        <div>
          <h1 className="text-2xl font-semibold pt-2 pb-2">{name}</h1>

        {/* {description > trim?<p>{trim}...</p>:<p>{description}</p>} */}
        <p>{description}</p>
        </div>
        
        <div className='flex gap-4 justify-between text-2xl'>
          <Link to={`/updateProduct/${id}`}>
          
          <i className="cursor-pointer ri-edit-2-line"></i>
          </Link>
          <i onClick={()=>{removeCard(id)}} className="cursor-pointer ri-delete-bin-fill"></i>
        </div>
      </div>


      

    </div>
  )
}

export default SingleCard