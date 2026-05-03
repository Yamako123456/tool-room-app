import React from 'react'
import { useNavigate } from 'react-router-dom';

interface Props {
  suppliers: SupplierModel[];
  setSuppliers: React.Dispatch<React.SetStateAction<SupplierModel[]>>; 
}

const ListSuppliers = ({suppliers, setSuppliers}: Props) => {
  const navigate = useNavigate();
  

  return (
    <div>ListSuppliers</div>
  )
}

export default ListSuppliers