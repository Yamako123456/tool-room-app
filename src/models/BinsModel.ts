export class BinModel {
    binCode: string;
    crib: string;
    active: boolean;
    item?: string;
    qty?: number;
    min?: number;
    
    constructor(
        binCode: string,
        crib: string, 
        active: boolean,
        item?: string,
        qty?: number,
        min?: number,        
    ) {
        this.binCode = binCode;
        this.crib = crib;
        this.active = active;
        this.item = item;
        this.qty = qty;
        this.min = min;        
    }
}