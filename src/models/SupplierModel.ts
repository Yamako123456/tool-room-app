
class SupplierModel {
        readonly recordId?: number;       
        myNo: string; //UNIQUE NOT NULL
        name: string; //NOT NULL
        addr1?: string; 
        addr2?: string;
        city?: string;
        state?: string;  
        zip?: string;  
        country?: string;
        phone: string; //NOT NULL
        fax?: string;
        contact?: string;
        email: string; //NOT NULL
        email2?: string;
        email3?: string; 

        autoPo: boolean;
        faxPo: boolean;
        emailPo: boolean;
        blanketPo?: string;
        custPoRepPath: string; //NOT NULL,
	
        notes?: string;

        regrinder: boolean;
        calibrator: boolean;

        serviceFee: number;
        stateTaxRate?: number; 
        currencyType?: string;
        
        shipMethod: string;
        useOrdQty: boolean;

        approval: boolean; 
        approveEmail?: string;
        authenticationAddr?: string;
 

        constructor(
                myNo: string,
                name: string,
                addr1: string, 
                addr2: string,
                city: string,
                state: string,  
                zip: string,
                country: string,
                phone: string, //NOT NULL
                fax: string,
                contact: string,
                email: string, //NOT NULL
                email2: string,
                email3: string, 

                autoPo: boolean,
                faxPo: boolean,
                emailPo: boolean,
                blanketPo: string,
                custPoRepPath: string, //NOT NULL,
                
                notes: string,

                regrinder: boolean,
                calibrator: boolean,

                serviceFee: number,
                stateTaxRate: number, 
                currencyType: string,
                
                shipMethod: string,
                useOrdQty: boolean,

                approval: boolean,
                approveEmail: string,
                authenticationAddr: string
        ) {
                this.myNo = myNo;
                this.name = name;
                this.addr1 = addr1;
                this.addr2 = addr2;
                this.city = city;
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
           
                this.shipMethod = shipMethod
                this.useOrdQty = useOrdQty
           
                this.approval = approval;
                this.approveEmail = approveEmail;
                this.authenticationAddr = authenticationAddr
	}
       
}