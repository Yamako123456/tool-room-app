import React, { useEffect, useRef } from 'react'
import { DepartmentModel } from '../../models/DepartmentModel'
import { useLocation, useNavigate } from 'react-router-dom';
import ListDepartments from './ListDepartments/ListDepartments';
import toast from 'react-hot-toast';

interface Props {
  depts: DepartmentModel[];
  setDepts: React.Dispatch<React.SetStateAction<DepartmentModel[]>>; 
  deptNumber: string;
  resetDept: () => void;
}

const Departments = ({ depts, setDepts, deptNumber, resetDept}: Props) => {
  const navigate = useNavigate() ;
  const location = useLocation();
  const message = location.state?.message;
  const toastShowRef = useRef(false);

  useEffect(() => {
    
    console.log("items.tsx useEffect: toastShowRef.current = ", toastShowRef.current)
    
    if (!message || toastShowRef.current) return;
  
    toastShowRef.current = true;
    toast.success(message);
    
    navigate(location.pathname,{ // navigate to this pageitself.
      replace: true,// Replace current history
      state: {}, // Clear navigation state.
    })

  } , [message, navigate, location.pathname] );
 
  return (
    <section id="departments">
      <div className='relative flex items-center'>
        <h2 className="absolute left-1/2 lg:-translate-x-1/2 text-2xl font-semibold">
          Manage Departments
        </h2>
        <button onClick={() => {resetDept(); navigate("/depts/add");}}
          className='mt-1 mb-10 lg:mt-0 lg:ml-auto bg-blue-500 text-white px-4 py-2 rounded'>
          + Add Department
        </button>
      </div>

      <ListDepartments
        depts={depts}
        setDepts={setDepts}
      
      />
    </section>
  )
}

export default Departments