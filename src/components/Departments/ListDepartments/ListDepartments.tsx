import React from 'react'
import { DepartmentModel } from '../../../models/DepartmentModel'
import {useNavigate} from 'react-router-dom';
import CardDept from '../CardDept/CardDept';

interface Props {
  depts: DepartmentModel[];
  setDepts: React.Dispatch<React.SetStateAction<DepartmentModel[]>>; 
  emps: EmpModel[];
}

const ListDepartments = ({depts, setDepts, emps}: Props) => {
  const navigate = useNavigate();
  const onEditDept = (deptCode: string) => navigate(`/depts/${deptCode}/edit` );

  return (
    <section id="listBins">    
      <div className='relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 items-start max-w-6xl mx-auto px-10 mb-5 md:px-6 '>
        <>
          {depts.length > 0 ? (
              depts.map((aDept) => {
                return (
                  <CardDept aDept={aDept} emps={emps} onEditDept={onEditDept}/>
                );
              })
            ):(
         
              <h3 className='my-3 text-xl font-semibold text-center md:tex-xl'>
                No departments have been defined in the toolroom system.
              </h3> 
            )
          }

        </>
        
      </div>
    </section>
  )
}

export default ListDepartments