import React, { useEffect } from 'react'
import { EmpModel } from '../../../models/EmpModel';
import { DepartmentModel } from '../../../models/DepartmentModel';
import { useParams } from 'react-router-dom';

interface Props {
  emps: EmpModel[];
  empBadgeNumber: string;
  setEmpBadgeNumber: React.Dispatch<React.SetStateAction<string>>;
  depts: DepartmentModel[];
  selectedDept: DepartmentModel | null;
  setSelectedDept: React.Dispatch<React.SetStateAction<DepartmentModel | null>>;
  empDeptNumber: string | undefined;
  setEmpDeptNumber: React.Dispatch<React.SetStateAction<string | undefined>>;
  firstName: string;
  setFirstName: React.Dispatch<React.SetStateAction<string>>;
  lastName: string;
  setLastName: React.Dispatch<React.SetStateAction<string>>;
  isSupervisor: boolean;
  setIsSupervisor: React.Dispatch<React.SetStateAction<boolean>>;
  isStocker: boolean;
  setIsStocker: React.Dispatch<React.SetStateAction<boolean>>;
  isEmpActive: boolean
  setIsEmpActive: React.Dispatch<React.SetStateAction<boolean>>;
  isLookupDeptOpen: boolean;
  setIsLookupDeptOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cancelEditEmp: () => void;
  handleEditEmp: () => void;
  handleDeleteEmp: () => void;
}

const EditEmployee = ({
  emps,
  empBadgeNumber,
  setEmpBadgeNumber,
  depts,
  selectedDept,
  setSelectedDept,
  empDeptNumber,
  setEmpDeptNumber,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  isSupervisor,
  setIsSupervisor,
  isStocker,
  setIsStocker,
  isEmpActive,
  setIsEmpActive,
  isLookupDeptOpen,
  setIsLookupDeptOpen,
  cancelEditEmp,
  handleEditEmp,
  handleDeleteEmp,
}: Props) => {

  const { empBadge } = useParams<{ empBadge: string}>();
  const selectedEmp = emps.find(emp => emp.badgeNo === empBadge);

  useEffect( () => {
    setEmpBadgeNumber(selectedEmp?.badgeNo ?? "");
    setFirstName(selectedEmp?.firstName ?? "")
    setLastName(selectedEmp?.lastName ?? "");
    setIsSupervisor(selectedEmp?.isSupervisor ?? false);
    setIsStocker(selectedEmp?.isStocker ?? false);
    
  }, [] );

  return (
    <div>EditEmployee</div>
  )
}

export default EditEmployee