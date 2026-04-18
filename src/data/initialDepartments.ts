import { DepartmentModel } from "../models/DepartmentModel";

export const initialDepartments: DepartmentModel[] = [
    {
        deptCode: "Prod",
        description: "Production",        
        active: true,        
    },
    {
        deptCode: "Maint",
        description: "Maintenance",
        active: true,        
    },   
]