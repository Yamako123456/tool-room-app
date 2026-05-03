import React from 'react'

interface Props {
  suppliers: SupplierModel[];
  setSuppliers: React.Dispatch<React.SetStateAction<SupplierModel[]>>; 
}

const ListSuppliers = (props: Props) => {
  return (
    <div>ListSuppliers</div>
  )
}

export default ListSuppliers