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
    uom: string;
    leadTime: number;

    private _recordId?: number; // Optional and read-only
    description2?: string;
    itemImage?: string;
    weight?: string;
    mfg?: string;
    mfgItem?: string;
    notes?: string;
    lastIssue?: Date;
    createdBy?: string;
    dateCreated?: Date;

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
        uom: string,
        leadTime: number,

        recordId?: number, // Optional and read-only
        description2?: string,
        itemImage?: string,
        weight?: string,
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
        this.uom = uom;
        this.dateCreated = dateCreated;
        this.leadTime = leadTime;

        this._recordId = recordId;
        this.description2 = description2;
        this.itemImage = itemImage;
        this.weight = weight;
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
