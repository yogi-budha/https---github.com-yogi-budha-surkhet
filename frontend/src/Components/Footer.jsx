

function Footer() {
    return (
     <>

<div className='px-4 md:px-24 lg:px-48 xl:px-96' id='Footer'>
  <hr className="mt-11 bg-green-900"/>
  <div className='w-full flex flex-col md:flex-row gap-4 justify-between bg-slate-400 dark:bg-slate-600 p-10 rounded-lg mt-10'>
    <div className='w-full md:w-2/4 flex gap-2 flex-col'>
      <p className='font-semibold text-slate-950 dark:text-slate-100 text-sm tracking-wide'>WELCOME TO SURKHET</p>
      <p className='text-slate-950 dark:text-slate-100 cursor-pointer text-xl'>About Us</p>
      <p className='text-slate-950 dark:text-slate-100 cursor-pointer text-xl'>Available Areas</p>
      <p className='text-slate-950 dark:text-slate-100 cursor-pointer text-xl'>Blog</p>
    </div>
    <div className='flex flex-col md:flex-row gap-3 justify-between w-full md:w-2/4'>
      <div className='flex flex-col gap-2'>
        <p className='font-semibold text-slate-950 dark:text-slate-100 text-sm'>GET HELP?</p>
        <p className='text-slate-950 dark:text-slate-100 cursor-pointer text-xl'>How To visit the Surkhet?</p>
        <p className='text-slate-950 dark:text-slate-100 cursor-pointer text-xl'>FAQs</p>
        <p className='text-slate-950 dark:text-slate-100 cursor-pointer text-xl'>Contact Us</p>
      </div>
      <div className='flex flex-col gap-2'>
        <p className='font-semibold text-slate-950 dark:text-slate-100 text-sm'>CALL US</p>
        <p className='text-slate-950 dark:text-slate-100 text-xl'>SURKHET: 382285,923847298,247982</p>
        <p className='text-slate-950 dark:text-slate-100 text-xl'>923847298,247982</p>
        <p className='text-slate-950 dark:text-slate-100 text-xl'>Call us</p>
        <p className='text-slate-950 dark:text-slate-100 text-xl'>SURKHET: 83984, 23842985</p>
      </div>
    </div>
  </div>
  <hr className='mt-11 bg-green-900'/>
</div>

<div className='flex flex-col md:flex-row justify-between items-center mt-4 pb-20 px-4 md:px-24 lg:px-48 xl:px-96 text-slate-950 dark:text-slate-100'>
  <p>Terms of usage | privacy policy</p>
  <p><span className='text-sm'>©</span> 2024 skt pvt.Ltd. All Rights Reserved</p>
</div>

     </>
    )
  }
  
  export default Footer