import React from 'react'
import logo from './logo.png'
import { Link } from 'react-router-dom';

type Props = {}

const MyNavbar = (props: Props) => {
  return (
    <div>
      <nav className="relative container mx-auto p-6">
       <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        {/* <div className="flex items-center justify-between"> */}
       
        {/* <div className="flex items-center space-x-20"> */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-20">
          <img
            src={logo}
            alt="Logo"
            className="w-32 h-auto object-contain mb-4 lg:mb-0"
          />
          

          {/* <div className="hidden font-bold lg:flex  space-x-6"> */}
          <div className="flex flex-col lg:flex-row font-bold space-y-2 lg:space-y-0 lg:space-x-6">  
            {/* <a href="" className="text-black hover:text-darkBlue">
              Dashboard
            </a> */}
            <Link to="/" className="text-black hover:text-darkBlue">
              Home
            </Link>
            <Link to="/items" className="text-black hover:text-darkBlue">
              Items
            </Link>
            <Link to="/bins" className='text-black hover:text-darkBlue'>
              Bins
            </Link>
            <Link to="/emps" className='text-black hover:text-darkBlue'>
              Employees
            </Link>               
            <Link to="/depts" className='text-black hover:text-darkBlue'>
              Departments
            </Link>   
            <Link to="/suppliers" className='text-black hover:text-darkBlue'>
              Suppliers
            </Link>   
            <Link to="/restocklist" className='text-black hover:text-darkBlue'>
              Inventory
            </Link>     
            <Link to="/about" className="text-black hover:text-darkBlue">
              About
            </Link>
          </div>
        </div>
        {/* <div className="hover:text-darkBlue">Login</div>
          <a
            href=""
              className="px-6 py-2 font-bold rounded text-white bg-green-500 hover:opacity-70 w-fit"
              // className="px-6 py-3 text-center font-bold rounded text-white bg-lightGreen hover:opacity-70"
          >
            Signup
          </a>
        </div>  */}
       </div>
      </nav>
    </div>
  )
}

export default MyNavbar