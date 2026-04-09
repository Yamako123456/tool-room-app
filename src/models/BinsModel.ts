export class BinModel {
    binCode: string;
    crib: string;
    item?: string;
    qty?: number;
    min?: number;

    constructor(
        binCode: string,
        crib: string, 
        item?: string,
        qty?: number,
        min?: number,
    ) {
        this.binCode = binCode;
        this.crib = crib;
        this.item = item;
        this.qty = qty;
        this.min = min
    }
}