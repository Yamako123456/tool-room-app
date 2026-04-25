
class SupplierModel {
        supCode: string; 
        name: string; 
        email: string
        addr1?: string; 
        addr2?: string;
        city?: string;
        state?: string;  
        zip?: string;  
        country?: string;
        currencyType?: string;
        contact?: string;
        phone: string;
        fax?: string;
        
        regrinder: boolean;
        calibrator: boolean;
        serviceFee: number;
        
        notes?: string;

        constructor(
                supCode: string,
                name: string,
                email: string,
                phone: string,
                fax: string,
                addr1: string, 
                addr2: string,
                city: string,
                state: string,  
                zip: string,
                country: string,
                currencyType: string,
                contact: string,
                
                regrinder: boolean,
                calibrator: boolean,
                serviceFee: number,
                
                notes: string,
        ) {
                this.supCode = supCode;
                this.name = name;
                this.email = email;
                this.phone = phone;
                this.fax = fax;
                this.addr1 = addr1;
                this.addr2 = addr2;
                this.city = city;
                this.zip = zip;
                this.country = country;
                this.currencyType =currencyType;
                this.contact = contact;
                
                this.regrinder = regrinder;
                this.calibrator = calibrator;
                this.serviceFee = serviceFee;
                
                this.notes = notes;
	}
       
}