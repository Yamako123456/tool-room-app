export class DepartmentModel {
    deptCode: string;
    description: string;
    managerId?: string;
    active: boolean;
    
    constructor(
        deptCode: string,
        description: string,        
        active: boolean,       
        managerId?:  string,        
    ) {
        this.deptCode = deptCode;
        this.description = description;
        this.active = active;
        this.managerId = managerId;        
    }
}