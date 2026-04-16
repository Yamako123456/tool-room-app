import { DepartmentModel } from "../models/DepartmentModel";

export const initialDepartments: DepartmentModel[] = [
    {
        deptCode: "prod",
        description: "Production",        
        active: true,        
    },
    {
        deptCode: "maint",
        description: "Maintenance",
        active: true,        
    },   
]