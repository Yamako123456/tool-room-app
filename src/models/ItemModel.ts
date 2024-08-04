class ItemModel {
    code: string;
    description1: string;
    itemType: string;
    unitPrice: number;
    issueCost: number;
    supplierId: string;
    category: string;
    active: boolean;
    assigned: boolean;//isUsedInTransactions;
    packQty: number;
    orderQty: number;
    weigh: boolean;
    weight: number;
    uom: string;
    leadTime: number;
    itemImage: string;
    
    private _recordId?: number; // Optional and read-only
    description2?: string;
    mfg?: string;
    mfgItem?: string;
    notes?: string;
    lastIssue?: Date;
    createdBy?: string;
    dateCreated?: Date;
    
    // public set recordId(recordId: number) {
    //     this._recordId = recordId;
    // }
    // public get recordId(): number | undefined {
    //     return this._recordId;
    // }

    constructor(
        code: string,
        description1: string,
        itemType: string,
        unitPrice: number,
        issueCost: number,
        supplierId: string,
        category: string,
        active: boolean,
        assigned: boolean,//isUsedInTransactions;
        packQty: number,
        orderQty: number,
        weigh: boolean,
        weight: number,
        uom: string,
        leadTime: number,
        itemImage: string,
        
        recordId?: number, // Optional and read-only
        description2?: string,
        mfg?: string,
        mfgItem?: string,
        notes?: string,
        lastIssue?: Date,
        createdBy?: string,
        dateCreated?: Date,
    ) {
    
        this.code = code;
        this.description1 = description1;
        this.itemType = itemType;
        this.unitPrice = unitPrice
        this.issueCost = issueCost;
        this.supplierId = supplierId;
        this.category = category;
        this.active = active;
        this.assigned = assigned;//isUsedInTransactions;
        this.packQty = packQty;
        this.orderQty = orderQty;
        this.weigh = weigh;
        this.weight = weight;
        this.uom = uom;
        this.dateCreated = dateCreated;
        this.leadTime = leadTime;
        this.itemImage = itemImage;
        
        this._recordId = recordId;
        this.description2 = description2;
        this.mfg = mfg; 
        this.mfgItem = mfgItem;
        this.notes = notes;
        this.lastIssue = lastIssue;
        this.createdBy = createdBy;
    }

    public get recordId(): number | undefined {
        return this._recordId === undefined ? undefined : this._recordId;
    }
    public set recordId(recordId: number) {
        this._recordId = recordId;
    }
}
 