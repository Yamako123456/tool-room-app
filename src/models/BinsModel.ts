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

    decreaseQty(qty: number): void {
        if (qty <= 0 ) {
            throw new Error("Quantity must be greater than zero.")
        }

        if (this.qty > qty ) {
            throw new Error("Insufficient bin quantity.")
        }

        this.qty -= qty;
    };

    increaseQty(qty: number): void {
        if (qty <= 0 ) {
            throw new Error("Quantity must be greater than zero.")
        }

        this.qty += qty;
    };

}