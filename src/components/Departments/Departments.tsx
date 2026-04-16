import React from 'react'
import { DepartmentModel } from '../../models/DepartmentModel'
import { useNavigate } from 'react-router-dom';
import ListDepartments from './ListDepartments/ListDepartments';

interface Props {
  depts: DepartmentModel[];
  setDepts: React.Dispatch<React.SetStateAction<DepartmentModel[]>>; 
  deptNumber: string;
  emps: EmpModel[];
  // selectedManager: EmpModel | null;
}

const Departments = ({ depts, setDepts, deptNumber, emps}: Props) => {
  const navigate = useNavigate() ;

  const onSearchSubmit = (e: any ) => {
    e.preventDefault();
    const keyword = e.target[0].value ? e.target[0].value.trim().toLowerCase() : "";
    const result =  keyword ? emps.filter( emp => {
      emp.firstName.toLowerCase().includes(keyword) || 
      emp.lastName.toLowerCase().includes(keyword) ||
      emp.badgeNo.toLowerCase().includes(keyword) 
    }) : emps;
  }


  return (
    <section id="departments">
      <div className='relative flex items-center'>
        <h2 className="absolute left-1/2 lg:-translate-x-1/2 text-2xl font-semibold">
          Manage Departments
        </h2>
        <button onClick={() => navigate("/depts/add")}
          className='mt-1 mb-10 lg:mt-0 lg:ml-auto bg-blue-500 text-white px-4 py-2 rounded'>
          + Add Department
        </button>
      </div>

      <ListDepartments
        depts={depts}
        setDepts={setDepts}
        emps={emps}    
      />
    </section>
  )
}

export default Departments