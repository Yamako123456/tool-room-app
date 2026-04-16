import React from 'react'
import { DepartmentModel } from '../../models/DepartmentModel';
import { useNavigate } from 'react-router-dom';
import ListEmployees from './ListEmployees/ListEmployees';

interface Props {
  emps: EmpModel[];
  setEmps: React.Dispatch<React.SetStateAction<EmpModel[]>>; 
  depts: DepartmentModel[];
}

const Employees = ({emps, setEmps, depts}: Props) => {
  
  const navigate = useNavigate();

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
        <button onClick={() => navigate("/emps/add")}
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