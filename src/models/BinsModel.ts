class BinModel {
    binCode: string;
    crib: string;
    item?: string;
    qty?: number;

    constructor(
        binCode: string,
        crib: string, 
        item?: string,
        qty?: number
    ) {
        this.binCode = binCode;
        this.crib = crib;
        this.item = item;
        this.qty = qty;
    }
}