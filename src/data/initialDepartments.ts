import { DepartmentModel } from "../models/DepartmentModel";

export const initialDepartments: DepartmentModel[] = [
    {
        deptCode: "prod",
        description: "Production",
        managerId: "1000", 
        active: true,        
    },
    {
        deptCode: "maint",
        description: "Maintenance",
        managerId: "2000", 
        active: true,        
    },   
]