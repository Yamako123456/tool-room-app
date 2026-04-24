import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CardEmp from '../CardEmp/CardEmp';
import { DepartmentModel } from '../../../models/DepartmentModel';
import { EmpModel } from '../../../models/EmpModel';

interface Props {
    emps: EmpModel[];
    setEmps: React.Dispatch<React.SetStateAction<EmpModel[]>>;
    depts: DepartmentModel[];
}

const ListEmployees = ({emps, setEmps, depts}: Props) => {
  const navigate = useNavigate();
  const [filterText, setFilterText] = useState<string>("");

  const onEditEmp = (badgeNo: string) => navigate(`/emps/${badgeNo}/edit` );

  const filteredEmps = useMemo(() =>{
    const keyword = filterText.trim().toLowerCase();
    if (!keyword)
      return emps;    
     
    return emps.filter(emp => {
      const badge = emp.badgeNo.toLowerCase();
      const empDept = depts.find( dept => dept.deptCode === emp.department);
      
      return badge.includes(keyword) ||
      emp.firstName.toLowerCase().includes(keyword) || emp.lastName.toLowerCase().includes(keyword) ||
      empDept?.deptCode.toLowerCase().includes(keyword) ||
      empDept?.description.toLowerCase().includes(keyword);
    });
  }, [emps, depts, filterText]);
  
  return (
    <section id="listEmps">    
      <div className='w-full mx-auto px-10 mb-5 md:-x6'>
        <label className='block text-sm font-medium mb-2'>
          Filter Employee
        </label>
        <input 
          type="text"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          placeholder='Searchy by emplyee and their department'
          className='w-full round-md border px-3 py-2'
        />
      </div>
      {/* <div className='relative grid grid-cols-1 md:grid-cols-3  gap-6 items-start max-w-6xl mx-auto px-10 mb-5 md:px-6 '> */}
      {/* <div className='relative flex flex-wrap gap-6 items-start max-w-6xl mx-auto px-10 mb-5 md:px-6 '> */}
      <div className='relative flex flex-wrap  gap-6 items-start max-w-6xl mx-auto px-10 mb-5 md:px-6 '> 
        <>
          {filteredEmps.length > 0 ? (
              filteredEmps.map((aEmp) => {
                return (
                  <CardEmp aEmp={aEmp} depts={depts} onEditEmp={onEditEmp}/>
                );
              })
            ):(
         
              <h3 className='my-3 text-xl font-semibold text-center md:tex-xl'>
                No employees to show
              </h3> 
            )
          }

        </>
        
      </div>
    </section>
  )
}

export default ListEmployees