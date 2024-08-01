enum ItemTypes {
    Expendable, //: 'Expendable',
    Durable, //: 'Durable',
    Perishable, //: 'Perishable',
    Serial, //: 'Serial',
    Gage //: 'Gage'
}

enum ItemCategories {
    Tool, //: 'Tool',
    Fastener, //: 'Bolts, Screws, Nails, etc',
    Machinery, //: 'End Mills, Drill Bits, Threading Tools, etc',
    Pipe, //: 'Pipes, Hose, Tube & Fittings',
    Welding, //: 'Welding',
    Electrical, //: 'Lighting & Electrical',
    Plumbing, //: 'Plumbing & Pumps',
    Adhesive, //: 'Tape, sealants, Glue',
    Materialhandling, //: 'Ladder, Cart, Storage, Lift equipment',
    TestInstrument, //: 'Multimeters, Voltage, Power Tester',
    RawMaterial, //: 'Raw Material',
    Safty, //: 'Safty item',
    OfficeSupply //: 'Office Supplies',

}   
class ItemModel {
    readonly recordId?: number; // Optional and read-only
    code: string;
    description1: string;
    description2: string;
    itemType: string;
    unitPrice: number;
    issueCost: number;
    supplierId: string;
    itemImage: string;
    category: string;
    active: boolean;
    assigned: boolean;//isUsedInTransactions;
    packQty: number;
    orderQty: number;
    weigh: boolean;
    weight: number;
    uom: string;
    mfg?: string;
    mfgItem?: string;
    notes?: string;
    lastIssue?: Date;
    dateCreated?: Date;
    createdBy?: string;

    constructor(
        code: string,
        description1: string,
        description2: string,
        itemType: string,
        unitPrice: number,
        issueCost: number,
        supplierId: string,
        itemImage: string,
        category: string,
        active: boolean,
        assigned: boolean,
        packQty: number,
        orderQty: number,
        weigh: boolean,
        weight: number,
        uom: string,
        mfg?: string,
        mfgItem?: string,
        notes?: string,
        lastIssue?: Date,
        dateCreated?: Date,
        createdBy?: string
    ) {
        this.code = code;
        this.description1 = description1;
        this.description2 = description2;
        this.itemType = itemType;
        this.unitPrice = unitPrice;
        this.issueCost = issueCost;
        this.supplierId = supplierId;
        this.itemImage = itemImage;
        this.category = category;
        // this.subCategory = subCategory;
        this.active = active;
        this.assigned = assigned; 
        this.packQty = packQty;
        this.orderQty = orderQty;
        this.weigh = weigh;
        this.weight = weight;
        this.uom = uom;
        this.mfg = mfg;
        this.mfgItem = mfgItem;
        this.notes = notes;
        this.lastIssue = lastIssue;
        this.dateCreated = dateCreated;
        this.createdBy = createdBy;
    }
}
 