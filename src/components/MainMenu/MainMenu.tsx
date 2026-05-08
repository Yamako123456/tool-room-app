import React from 'react'
import { EmpModel } from '../../models/EmpModel'

interface Props {
  loggedInEmp: EmpModel | undefined;
}

const MainMenu = ({loggedInEmp}: Props) => {
  return (
    <section id="main-menu">
      <div className='relative flex items-center'>
        <h2 className='absolute left-1/2 lg:-translate-x-1/2 font-semibold'>
          Main Menu
        </h2>
      </div>
      
      <div className="mt-8 border-t pt-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Welcome, {loggedInEmp?.firstName} {loggedInEmp?.lastName}
        </h2>

        <p className="text-gray-500 text-sm mt-1">
          Badge: {loggedInEmp?.badgeNo}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
          <button className="rounded-lg bg-green-600 hover:bg-green-700 text-white py-3">
            Issue
          </button>

          <button className="rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white py-3">
            Return
          </button>
        </div>
      </div>      
    </section>
  )
}

export default MainMenu