export class ItemModel {
    code: string;
    description1: string;
    itemImage: string;
    itemType: string;
    unitPrice: number;
    issueCost: number;
    uom: string;
    packQty: number;
    supCode: string;
    mfg: string;
    mfgItem: string;
    leadTime: number;
    orderQty: number;
    dateCreated: Date;
    active: boolean;
    disabled: boolean;

    // ----Obsolete---------    
    description2?: string;
    category: string;
    weigh: boolean;
    weight?: string;
    lastIssue?: Date;
    notes?: string;
    createdBy?: string;
    
    constructor(
        code: string,
        description1: string,
        itemImage: string,
        itemType: string,
        unitPrice: number,
        issueCost: number,
        uom: string,
        packQty: number,
        supCode: string,
        mfg: string,
        mfgItem: string,
        leadTime: number,
        orderQty: number,
        dateCreated: Date,
        active: boolean,
        disabled: boolean,

        // ----Obsolete---------
        category: string,
        weigh: boolean,
        description2?: string,
        weight?: string,
        notes?: string,
        lastIssue?: Date,
        createdBy?: string,
    ) {
        this.code = code;
        this.description1 = description1;
        this.itemImage = itemImage;
        this.itemType = itemType;
        this.unitPrice = unitPrice;
        this.issueCost = issueCost;
        this.uom = uom; 
        this.packQty = packQty;
        this.supCode = supCode; 
        this.mfgItem = mfgItem; 
        this.leadTime = leadTime;
        this.orderQty = orderQty; 
        this.dateCreated = dateCreated; 
        this.active = active;
        this.disabled = disabled;

        // ----Obsolete---------
        this.category = category;
        this.weigh = weigh;
        this.description2 = description2;
        this.weight = weight;
        this.mfg = mfg;
        this.notes = notes;
        this.lastIssue = lastIssue;
        this.createdBy = createdBy;
    }


}
