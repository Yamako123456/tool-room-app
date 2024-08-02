// enum ItemTypes {
//     Expendable, //: 'Expendable',
//     Durable, //: 'Durable',
//     Perishable, //: 'Perishable',
//     Serial, //: 'Serial',
//     Gage //: 'Gage'
// }

// enum UnitOfMeasure {
//     qty, 
//     pack,
//     oz, 
//     lb, 
//     mg,
//     g, 
//     kg,
//     in,
//     ft, 
//     yd,
//     mm,
//     cm,
//     m,
//     ml,
//     L,
//     floz,
//     pt,
//     gal
// }

// enum ItemCategories {
//     Tool, //: 'Tool',
//     Fastener, //: 'Bolts, Screws, Nails, etc',
//     Machinery, //: 'End Mills, Drill Bits, Threading Tools, etc',
//     Pipe, //: 'Pipes, Hose, Tube & Fittings',
//     Welding, //: 'Welding',
//     Electrical, //: 'Lighting & Electrical',
//     Plumbing, //: 'Plumbing & Pumps',
//     Adhesive, //: 'Tape, sealants, Glue',
//     Materialhandling, //: 'Ladder, Cart, Storage, Lift equipment',
//     TestInstrument, //: 'Multimeters, Voltage, Power Tester',
//     RawMaterial, //: 'Raw Material',
//     Safty, //: 'Safty item',
//     OfficeSupply //: 'Office Supplies',

// }  



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
    
    private _recordId?: number; // Optional and read-only
    description2?: string;
    itemImage?: string;
    weight?: number;
    mfg?: string;
    mfgItem?: string;
    notes?: string;
    lastIssue?: Date;
    createdBy?: string;
    dateCreated?: Date;
    leadTime?: number;
    
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
        uom: string,
        
        recordId?: number, // Optional and read-only
        description2?: string,
        itemImage?: string,
        weight?: number,
        mfg?: string,
        mfgItem?: string,
        notes?: string,
        lastIssue?: Date,
        createdBy?: string,
        dateCreated?: Date,
        leadTime?: number
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
        
        this._recordId = recordId;
        this.description2 = description2;
        this.itemImage = itemImage;
        this.weight = weight;
        this.mfg = mfg; 
        this.mfgItem = mfgItem;
        this.notes = notes;
        this.lastIssue = lastIssue;
        this.createdBy = createdBy;
        this.leadTime = leadTime;
    }

    public get recordId(): number | undefined {
        return this._recordId === undefined ? undefined : this._recordId;
    }
    public set recordId(recordId: number) {
        this._recordId = recordId;
    }
}
 