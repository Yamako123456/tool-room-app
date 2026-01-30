//barcodespider.com Lookup equest esponse
export type ItemResponse = {
       code: number,   //200
       status: string,  //"OK"
       message: string,  //"Data returned"
}

export type ItemAttributes = {
      title: string,
       upc: string,  // "039800108036"
       ean: string,  //"0039800108036"
       parent_category: string,  //"Batteries"
       category: string,  //"Wireless Phone Accessory"
       brand: string,  //"Eveready"
       mpn: string,  //"4330207043"
       manufacturer: string,   //"Eveready Battery Co Inc"
       publisher: string,  //"Eveready Battery Co Inc"
       asin: string,  //"B071HVKWFV"
       color: string,  //"Black"
       size: string,  //"All"
       weight: string, //"0.1 Pounds"
       image: string,  //
       description: string,  //"https://images-na.ssl-images-amazon.com/images/I/517H6HFWLZ
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
    stores: Store[];
};

//-----------------------------------------------------------------------------------------



////////////////////////////////////////////////////////////////////



