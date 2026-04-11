export class BinModel {
    binCode: string;
    crib: string;
    item: string;
    qty: number;
    min: number;
    active: boolean;
    
    constructor(
        binCode: string,
        crib: string, 
        item: string,        
        qty: number,
        min: number, 
        active: boolean,       
    ) {
        this.binCode = binCode;
        this.crib = crib;
        this.item = item;
        this.qty = qty;
        this.min = min;        
        this.active = active;
    }
}