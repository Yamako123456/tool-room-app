import React, { useEffect, useRef } from 'react'
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import ListSuppliers from './ListSuppliers/ListSuppliers';
import { SupplierModel } from '../../models/SupplierModel';

interface Props {
  suppliers: SupplierModel[];
  setSuppliers: React.Dispatch<React.SetStateAction<SupplierModel[]>>; 
  supplierNumber: string;
  resetSup: () => void;
}

const Suppliers = ({
  suppliers, setSuppliers, supplierNumber, resetSup}: Props) => {

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

  return (
    <section id="suppliers">
      <div className='relative flex items-center'>
        <h2 className='absolute left-1/2 lg:-translate-x-1/2 text-2xl font-semibold'>
          Manage Suppliers
        </h2>
        <button
          onClick={() => {resetSup(); navigate("/suppliers/add");}}
          className='mt-1 mb-10 lg:mt-0 lg:ml-auto bg-blue-500 text-white px-4 py-2 rounded'
        >
          + Add Supplier
        </button>
      </div>

      <ListSuppliers
        suppliers={suppliers}
        setSuppliers={setSuppliers}
      />
    </section>
  )
}

export default Suppliers