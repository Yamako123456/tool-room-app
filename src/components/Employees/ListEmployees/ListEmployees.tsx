import React from 'react'
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
  const onEditEmp = (badgeNo: string) => navigate(`/emps/${badgeNo}/edit` );
  
  return (
    <section id="listEmps">    
      <div className='relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 items-start max-w-6xl mx-auto px-10 mb-5 md:px-6 '>
        <>
          {emps.length > 0 ? (
              emps.map((aEmp) => {
                return (
                  <CardEmp aEmp={aEmp} depts={depts} onEditEmp={onEditEmp}/>
                );
              })
            ):(
         
              <h3 className='my-3 text-xl font-semibold text-center md:tex-xl'>
                There is no employees defined for your Toolroom.
              </h3> 
            )
          }

        </>
        
      </div>
    </section>
  )
}

export default ListEmployees