import { DepartmentModel } from "../models/DepartmentModel";

export const initialDepartments: DepartmentModel[] = [
    {
        deptCode: "PROD",
        description: "Production",        
        active: true,        
    },
    {
        deptCode: "MAINT",
        description: "Maintenance",
        active: true,        
    },   
     {
        deptCode: "OPR",
        description: "Operation",
        active: true,        
    },       
]