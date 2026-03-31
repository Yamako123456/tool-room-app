import React from 'react'
import logo from './logo.png'
import { Link } from 'react-router-dom';
type Props = {}

const MyNavbar = (props: Props) => {
  return (
    <div>
     <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <img src={logo} alt="" />
          <div className="hidden font-bold lg:flex  space-x-6">
            <a href="" className="text-black hover:text-darkBlue">
              Dashboard
            </a>
            <Link to="/" className="text-black hover:text-darkBlue">
              Home
            </Link>
            <Link to="/items" className="text-black hover:text-darkBlue">
              Items
            </Link>
            <Link to="/about" className="text-black hover:text-darkBlue">
              About
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex items-center space-x-6 text-black">
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
    </div>
  )
}

export default MyNavbar