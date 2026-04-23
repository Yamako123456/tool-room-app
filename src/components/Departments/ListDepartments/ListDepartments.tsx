import React, { useMemo, useState } from 'react'
import { DepartmentModel } from '../../../models/DepartmentModel'
import {useNavigate} from 'react-router-dom';
import CardDept from '../CardDept/CardDept';

interface Props {
  depts: DepartmentModel[];
  setDepts: React.Dispatch<React.SetStateAction<DepartmentModel[]>>; 
}

const ListDepartments = ({depts, setDepts}: Props) => {
  const navigate = useNavigate();
  const [filterText, setFilterText] = useState<string>("");

  const onEditDept = (deptCode: string) => navigate(`/depts/${deptCode}/edit` );

  const filteredDepts = useMemo(() => {
    const keyword = filterText.trim().toLowerCase();
    
    if (!keyword) 
      return depts;
    
    return depts.filter((dept) => {
      return dept.deptCode.toLowerCase().includes(keyword) || dept.description.toLowerCase().includes(keyword);
    });

    }, [filterText, depts]);

  return (
    <section id="listBins">    
      <div>
        <div className='mb-6'>
          <label className='block text-sm font-medium mb-2'>
            Filter Departments
          </label>
          <input 
            type="text"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            placeholder='Search by department code or department name'
            className='w-full rounded-md border px-3 py-2'
          />
        </div>
        <div className='relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 items-start max-w-6xl mx-auto px-10 mb-5 md:px-6 '>
            {filteredDepts.length > 0 ? (
                filteredDepts.map((aDept) => {
                  return (
                    <CardDept aDept={aDept} onEditDept={onEditDept}/>
                  );
                })
              ):(
          
                <h3 className='my-3 text-xl font-semibold text-center md:tex-xl'>
                  No departments have been defined in the toolroom system.
                </h3> 
              )
            }
        </div>
      </div>
    </section>
  )
}

export default ListDepartments