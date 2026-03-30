class BinModel {
    code: string;
    crib: string;
    item?: string;
    qty?: number;

    constructor(
        code: string,
        crib: string, 
        item?: string,
        qty?: number
    ) {
        this.code = code;
        this.crib = crib;
        this.item = item;
        this.qty = qty;
    }
}