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
    code: string = '';// "153KJ83",
    description1: string = ''; // "Makita Cordless Pistol-Grip Drills",
    description2: string = '' // "Tools using lower-voltage batteries are generally lighter and more compact but less powerful than tools using higher-voltage batteries.",
    itemType: string = ''; //ItemTypes = ItemTypes.Durable; // enum "Durable",
    unitPrice: number = 0; // "161.54",
    issueCost: number = 0; // "5.00",
    supplierId: string = ''; // "XFD12Z",
    itemImage: string = ''; //"https://d3jdpongi7ohqb.cloudfront.net/drill_codeless_green.jpg",
    category: string = ''; //ItemCategories.Tool; // "Tool",
    subCategory: string  = ''; // "Power Tool",
    active: boolean = true; // true
    isUsedInTransactions: boolean = false; // false

    constructor(code: string,
        description1: string, 
        description2: string, 
        itemType : string, 
        unitPrice: number, 
        issueCost: number, 
        supplierId: string, 
        itemImage: string, 
        category: string, 
        subCategory: string, 
        active: boolean, 
        isUsedInTransactions: boolean) {
            this.code = code;
            this.description1 = description1;
            this.description2 = description2;
            this.itemType = itemType;
            this.unitPrice = unitPrice;
            this.issueCost = issueCost;
            this.supplierId = supplierId;
            this.itemImage = itemImage;
            this.category = category;
            this.subCategory  = subCategory;
            this.active = active;
            this.isUsedInTransactions =isUsedInTransactions;
    }
}