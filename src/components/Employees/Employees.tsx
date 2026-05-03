import React, { useEffect, useRef } from 'react'
import { DepartmentModel } from '../../models/DepartmentModel';
import { useLocation, useNavigate } from 'react-router-dom';
import ListEmployees from './ListEmployees/ListEmployees';
import { EmpModel } from '../../models/EmpModel';
import toast from 'react-hot-toast';

interface Props {
  emps: EmpModel[];
  setEmps: React.Dispatch<React.SetStateAction<EmpModel[]>>; 
  depts: DepartmentModel[];
  resetEmp: () => void;
}

const Employees = ({emps, setEmps, depts, resetEmp}: Props) => {
  
  const navigate = useNavigate();
  const location = useLocation();
  const message = location.state?.message;
  const toastShowRef = useRef(false);

  useEffect(() => {
    
    if (!message || toastShowRef.current) return;
  
    toastShowRef.current = true;
    toast.success(message);
    
    navigate(location.pathname,{ // navigate to this pageitself.
      replace: true,// Replace current history
      state: {}, // Clear navigation state.
    })

  } , [message, navigate, location.pathname] );

  const onSearchSubmit = (e: any) => {
    e.preventDefault();
    const keyword = e.target[0].value ? e.target[0].value.trim().toLowerCase() : "";
    const result = keyword ? depts.filter( dept => {
      dept.deptCode.toLowerCase().includes(keyword) ||
      dept.description.toLowerCase().includes(keyword)
    }) : depts;
  }
  
  return (
    <section id="departments">
      <div className='relative flex items-center'>
        <h2 className="absolute left-1/2 lg:-translate-x-1/2 text-2xl font-semibold">
          Manage Employees
        </h2>
        <button onClick={() => {resetEmp();  navigate("/emps/add"); }}
          className='mt-1 mb-10 lg:mt-0 lg:ml-auto bg-blue-500 text-white px-4 py-2 rounded'>
          + Add Employee
        </button>
      </div>

      <ListEmployees
          emps={emps}
          setEmps={setEmps}
          depts={depts}
      />
    </section>
  )
}

export default Employees