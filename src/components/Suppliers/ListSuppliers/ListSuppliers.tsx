import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CardSupplier from '../CardSupplier/CardSupplier';
import { SupplierModel } from '../../../models/SupplierModel';

interface Props {
  suppliers: SupplierModel[];
  setSuppliers: React.Dispatch<React.SetStateAction<SupplierModel[]>>; 
}

const ListSuppliers = ({suppliers, setSuppliers}: Props) => {
  const navigate = useNavigate();
  const [filterText, setFilterText] = useState<string>("");

  const onEditSup = (supCode: string) => navigate(`/suppliers/${supCode}/edit`);
  
  const filteredSuppliers = useMemo(() => {
    const keyword = filterText.trim().toLowerCase();
    if(!keyword) return suppliers;

    return suppliers.filter((sup) => {
      return sup.supCode.toLowerCase().includes(keyword) || sup.name.toLowerCase().includes(keyword);
    });

  }, [filterText,suppliers]);

  return (
    <section id='listSuppliers'>
      <div className='w-full mx-auto mb-5 px-10 md:px-6'>
        <label className='block text-sm font-medium mb-2'>
          Filter Suppliers
        </label>
        <input
          type='text'
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          placeholder='Search by supplier code or supplier name'
          className='w-full rounded-md border px-3 py-2'
        >
        </input>
      </div>
      <div className='relative flex flex-wrap gap-6 items-start max-w-6xl mx-auto px-10 md:px-6 mb-5'>    
        {filteredSuppliers.length > 0 ? (
            filteredSuppliers.map((sup) => {
              return (
                <CardSupplier aSupplier={sup} onEditSup={onEditSup} />
              )
            })
          ): (
            <h3 className='my-3 text-xl font-semibold text-center md:text-xl'>
              No supplier to show.
            </h3>
              
          )}
      </div>
    </section>
  )
}

export default ListSuppliers