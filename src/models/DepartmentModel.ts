export class DepartmentModel {
    deptCode: string;
    description: string;
    active: boolean;
    
    constructor(
        deptCode: string,
        description: string,        
        active: boolean,               
    ) {
        this.deptCode = deptCode;
        this.description = description;
        this.active = active;        
    }
}