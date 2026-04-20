export class EmpModel {
    badgeNo: string;
    firstName: string;
    lastName: string;    
    active: boolean;
    isSupervisor: boolean;
    isStocker: boolean;
    department?: string;

    constructor(
        badgeNo: string,
        firstName: string,
        lastName: string,        
        active: boolean,
        isSupervisor: boolean,
        isStocker: boolean,
        department?: string,
    ) {
        this.badgeNo = badgeNo;
        this.firstName = firstName;
        this.lastName = lastName;        
        this.active = active;
        this.isSupervisor = isSupervisor;
        this.isStocker = isStocker;
        this.department = department;
    }
}