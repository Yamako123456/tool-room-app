
class SupplierModel {
        readonly recordId?: number;       
        myNo: string; //UNIQUE NOT NULL
        myName: string; //NOT NULL
        addr1?: string; 
        addr2?: string;
        city?: string;
        myState?: string;  
        zip?: string;  
        country?: string;
        phone: string; //NOT NULL
        fax?: string;
        contact?: string;
        email: string; //NOT NULL
        email2?: string;
        email3?: string; 

        autoPo: boolean;//NOT NULL
        faxPo: boolean;//NOT NULL
        emailPo: boolean;//NOT NULL
        blanketPo?: string;
        custPoRepPath: string; //NOT NULL,
	
        notes?: string;
        
        regrinder: boolean;
        calibrator: boolean;
        
        serviceFee?: number;
        stateTaxRate?: number; 
        currencyType?: string;
        
        shipMethod?: string;
        useOrdQty: boolean;
        
        approval: boolean; 
        approveEmail?: string;
        authenticationAddr?: string;
        assigned: boolean; 
        active: boolean;       
        

        constructor(
                myNo: string,
                myName: string,
                phone: string,
                email: string, 
                autoPo: boolean,
                faxPo: boolean,
                emailPo: boolean,
                custPoRepPath: string, 
                regrinder: boolean,
                calibrator: boolean,
                useOrdQty: boolean,
                approval: boolean,
                assigned: boolean,
                active: boolean,
                addr1?: string, 
                addr2?: string,
                city?: string,
                myState?: string,  
                zip?: string,
                country?: string,
                fax?: string,
                contact?: string,
                email2?: string,
                email3?: string, 
                blanketPo?: string,
                notes?: string,

                serviceFee?: number,
                stateTaxRate?: number, 
                currencyType?: string,
                shipMethod?: string,
                approveEmail?: string,
                authenticationAddr?: string,
        ) {
                this.myNo = myNo;
                this.myName = myName;
                this.addr1 = addr1;
                this.addr2 = addr2;
                this.city = city;
                this.myState = myState;
                this.zip = zip;
                this.country = country;
                this.phone = phone;
                this.fax = fax;
                this.contact = contact;
                this.email = email;
                this.email2 = email2;
                this.email3 = email3;
           
                this.autoPo = autoPo;
                this.faxPo = faxPo;
                this.emailPo = emailPo;
                this.blanketPo = blanketPo;
                this.custPoRepPath = custPoRepPath
           
                this.notes = notes;
           
                this.regrinder = regrinder;
                this.calibrator = calibrator;
           
                this.stateTaxRate = stateTaxRate; 
                this.serviceFee = serviceFee;
                this.currencyType =currencyType;
           
                this.shipMethod = shipMethod;
                this.useOrdQty = useOrdQty;
           
                this.approval = approval;
                this.approveEmail = approveEmail;
                this.authenticationAddr = authenticationAddr;
                this.assigned = assigned;
                this.active = active;
	}
       
}