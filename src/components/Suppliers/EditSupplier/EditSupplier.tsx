import React from 'react'

interface Props {
    suppliers: SupplierModel[];
    supplierNumber: string;
    setSupplierNumber: React.Dispatch<React.SetStateAction<string>>;
    //------------
      supplierName: string;
      setSupplierName: React.Dispatch<React.SetStateAction<string>>;
      supplierEmail: string;
      setSupplierEmail: React.Dispatch<React.SetStateAction<string>>;
      supplierAddr1: string;
      setSupplierAddr1: React.Dispatch<React.SetStateAction<string>>;
      supplierAddr2: string;
      setSupplierAddr2: React.Dispatch<React.SetStateAction<string>>;
      supplierCity: string;
      setSupplierCity: React.Dispatch<React.SetStateAction<string>>;
      supplierState: string;
      setSupplierState: React.Dispatch<React.SetStateAction<string>>;
      supplierZip: string; 
      setSupplierZip: React.Dispatch<React.SetStateAction<string>>;
      supplierCountry: string;
      setSupplierCountry: React.Dispatch<React.SetStateAction<string>>;
      supplierCurrency: string;
      setSupplierCurrency: React.Dispatch<React.SetStateAction<string>>;
      supplierContact: string;
      setSupplierContact: React.Dispatch<React.SetStateAction<string>>;
      supplierPhone: string;
      setSupplierPhone: React.Dispatch<React.SetStateAction<string>>;
      supplierFax: string;
      setSupplierFax: React.Dispatch<React.SetStateAction<string>>;
      supplierIsGrinder: boolean;
      setSupplierIsGrinder: React.Dispatch<React.SetStateAction<boolean>>;
      supplierIsCalibrator: boolean;
      setSupplierIsCalibrator: React.Dispatch<React.SetStateAction<boolean>>;
      supplierServiceFee: number;
      setSupplierServiceFee: React.Dispatch<React.SetStateAction<number>>;
    //--------------
    isSupplierActive: boolean;
    setIsSupplierActive: React.Dispatch<React.SetStateAction<boolean>>;

    handleEditSuppliert: () => void;
    handleDeleteSupplier: () => void;
    cancelEditSupplier: () => void;
}

const EditSupplier = ({
      suppliers,
      supplierNumber,
      setSupplierNumber,
      //------------
      supplierName,
      setSupplierName,
      supplierEmail,
      setSupplierEmail,
      supplierAddr1,
      setSupplierAddr1,
      supplierAddr2,
      setSupplierAddr2,
      supplierCity,
      setSupplierCity,
      supplierState,
      setSupplierState,
      supplierZip,
      setSupplierZip,
      supplierCountry,
      setSupplierCountry,
      supplierCurrency,
      setSupplierCurrency,
      supplierContact,
      setSupplierContact,
      supplierPhone,
      setSupplierPhone,
      supplierFax,
      setSupplierFax,
      supplierIsGrinder,
      setSupplierIsGrinder,
      supplierIsCalibrator,
      setSupplierIsCalibrator,
      supplierServiceFee,
      setSupplierServiceFee,
    //--------------
    isSupplierActive,
    setIsSupplierActive,

    handleEditSuppliert,
    handleDeleteSupplier,
    cancelEditSupplier,

}: Props) => {
  return (
    <div>
      EditSupplier
    </div>
  )
}

export default EditSupplier