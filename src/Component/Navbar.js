import React from 'react'
import '../Component/Navbar.css'

const Navbar = () => {
  return (
    <div>
        <div className='navbar'>
           <div >
              <img src="./KIAM 1.png" alt="" className='img' />
           </div>
           <div>
                 <ul className='menu'>
                  <li className='nav'>Home</li>
                  <li className='nav'>Services</li>
                  <li className='nav'>Products</li>
                  <li className='nav'>About Us</li>
                  <li className='nav'>Careers</li>
                 </ul>
           </div>
        </div>
    </div>
  )
}

export default Navbar