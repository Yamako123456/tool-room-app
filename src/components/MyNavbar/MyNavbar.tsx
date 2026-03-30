import React from 'react'
import logo from './logo.png'

type Props = {}

const MyNavbar = (props: Props) => {
  return (
     <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <img src={logo} alt="" />
          <div className="hidden font-bold lg:flex">
            <a href="" className="text-black hover:text-darkBlue">
              Dashboard
            </a>
          </div>
        </div>
        <div className="hidden lg:flex items-center space-x-6 text-back">
          <div className="hover:text-darkBlue">Login</div>
          <a
            href=""
            className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
          >
            Signup
          </a>
        </div>
      </div>
    </nav>

// <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
    //         <div className='container-fluid'>
    //           <Link className='navbar-brand' to='/'>Toolroom Management System</Link>
  
  
    //           <button className="navbar-toggler" type="button"
    //             data-bs-toggle="collapse"
    //             data-bs-target="#contents">
    //             <span className="navbar-toggler-icon"></span>
    //           </button>
    //           <div className='collapse navbar-collapse' id='contents'>
    //             <ul className='navbar-nav'>
    //               <li className='nav-item'>
    //                 <Link to="/" className='nav-link '>Home</Link>
    //               </li>
    //               <li className='nav-item'>
    //                 <Link to="/items" className='nav-link'>Items</Link>
    //               </li>
    //               <li className='nav-item'>
    //                 <Link to="/about" className='nav-link'>About</Link>
    //               </li>
    //             </ul>
    //           </div>
  
    //         </div>
    //       </nav>

  )
}

export default MyNavbar