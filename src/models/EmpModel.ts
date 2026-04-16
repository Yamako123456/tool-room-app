class EmpModel {
    badgeNo: string;
    firstName: string;
    lastName: string;    
    active: boolean;
    department?: string;

    constructor(
        badgeNo: string,
        firstName: string,
        lastName: string,        
        active: boolean,
        department?: string,
    ) {
        this.badgeNo = badgeNo;
        this.firstName = firstName;
        this.lastName = lastName;        
        this.active = active;
        this.department = department;
    }
}