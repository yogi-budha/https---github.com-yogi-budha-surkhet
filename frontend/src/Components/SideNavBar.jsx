import  { useEffect } from 'react'

function SideNavBar() {

    useEffect(() => {    
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        menuBtn.addEventListener('click', () => {
          menuBtn.classList.toggle('open');
          mobileMenu.classList.toggle('hidden');
        });
      }, []);
  return (

    <>
      <div className="md:hidden"> <button id="menu-btn" className="text-white focus:outline-none"> <i className="ri-menu-line text-3xl"></i> </button> </div>  <div id="mobile-menu" className="hidden md:hidden"> <a href="#" className="block text-white px-4 py-2">Home</a> <a href="#" className="block text-white px-4 py-2">About</a> <a href="#" className="block text-white px-4 py-2">Services</a> <a href="#" className="block text-white px-4 py-2">Contact</a>
    </div>
    </>
  
  )
}

export default SideNavBar