export class BinModel {
    binCode: string;
    crib: string;
    item?: string;
    qty: number;
    min: number;
    active: boolean;
    
    constructor(
        binCode: string,
        crib: string,         
        qty: number,
        min: number, 
        active: boolean,       
        item?: string,        
    ) {
        this.binCode = binCode;
        this.crib = crib;        
        this.qty = qty;
        this.min = min;        
        this.active = active;
        this.item = item;
    }

   

}