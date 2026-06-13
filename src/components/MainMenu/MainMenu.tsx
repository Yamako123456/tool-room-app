import React from 'react'
import { EmpModel } from '../../models/EmpModel'
import { useNavigate } from 'react-router-dom';

interface Props {
  loggedInEmp: EmpModel | undefined;
  handleLogOut: () => void;
  hasOpenIssue: boolean;
  setHasOpenIssue: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainMenu = ({loggedInEmp, handleLogOut, hasOpenIssue, setHasOpenIssue}: Props) => {

  const navigate = useNavigate();

  return (
    <section id="main-menu">
      <div className='absolute left-1/2 lg:-translate-x-1/2'>
          <h2 className=' text-2xl font-semibold'>
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
          
          <button 
            onClick={() => navigate('/issue')}
            className="rounded-lg bg-green-600 hover:bg-green-700 text-white py-3"
          >
            Issue
          </button>

          {/* {hasOpenIssue &&<button  */}
          {<button 
            onClick={() => navigate('/return')}
            className="rounded-lg bg-green-600 hover:bg-green-700 text-white py-3"
          >
            Return
          </button>
          }  
           
          {(loggedInEmp?.isStocker || loggedInEmp?.isSupervisor) &&
          <button 
            onClick={() => navigate('/stock')}
            className="rounded-lg bg-green-600 hover:bg-green-700 text-white py-3"
          >
            Stock
          </button>
          }
            
          {loggedInEmp?.isSupervisor &&
          <button 
            onClick={() => navigate("/physical-count")}
            className="rounded-lg bg-green-600 hover:bg-green-700 text-white py-3">
            Physical Count
          </button>
          }

          <button 
            type='button'
            onClick={handleLogOut}
            className="rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white py-3">
            Log Out
          </button>
        </div>
      </div>      
    </section>
  )
}

export default MainMenu