//barcodespider.com Lookup equest esponse
export type ItemResponse = {
       code: number,   //200
       status: string,  //"OK"
       message: string,  //"Data returned"
}

export type ItemAttributes = {
    asin: string, //"B071HVKWFV"
    brand: string, //"Eveready"
    category: string, //"Electronics"
    color: string, //""
    description: string, //""
    ean: string, //"0039800108036"
    highest_price?: string, //"28.59"
    image: string, //"https://images.barcodespider.com/upcimage/039800108036.jpg"
    is_adult: string, //"0"
    lowest_price?: string, //"7.97"
    manufacturer: string, //"Eveready Battery Co Inc"
    model: string, //"4330207043"
    mpn: string, //"E91LP-16"
    parent_category: string, //"Electronics"
    publisher: string, //"Eveready Battery Co Inc"
    size: string, //""
    title: string, //"Eveready Battery Co Inc Energizer Alkaline Battery, AA, 16/PK, BKSR"
    upc: string, //"039800108036"
    weight: string, //""
}

export type Store = { 
    store_name: string,  //"Amazon US"
    title: string,  //"Eveready Battery Co Inc Energizer Alkaline Battery, AA, 16/PK, BKSR"
    image: string,  //
    price: string, //"16.99"
    currency: string,  // "USD"
    link: string,  //"https://images-na.ssl-images-amazon.com/images/I/517H6HFWLZL.jpg"
    updated: string,   //   "2019-04-27 04:25"
}

export interface BarcodeSpiderLookupResponse {
    item_response: ItemResponse;
    item_attributes: ItemAttributes;
    Stores: Store[];
};

//-----------------------------------------------------------------------------------------



////////////////////////////////////////////////////////////////////



