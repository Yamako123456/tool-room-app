
export type BarcodeSpiderLookupResponse = {
  // Barcode Spider returns a JSON object; structure can vary by barcode.
  // Keep this flexible, but you can tighten it once you see real responses.
  item_attributes?: {
    title?: string;
    brand?: string;
    manufacturer?: string;
    category?: string;
    description?: string;
    [k: string]: unknown;
  };
  images?: string[];
  upc?: string;
  ean?: string;
  [k: string]: unknown;
};





////////////////////////////////////////////////////////////////////
// export interface ProductSearch {
//   code: string,
//   total: number,
//   offset: number,
//   items: item[]
// }

// export interface item {
// ean: string, //	EAN-13, 13-digit European Article Number (aka. GTIN-13). This is the unique number we used to identify each item in our database. If it starts with 0, the rest 12-digit is the UPC (aka. UPC-A, GTIN-12), ex. 0885909456017.
// title: string, //	Item title
// upc: string, //	[optional] UPC-A, 12-digit Universal Product Code (aka. GTIN-12). If item’s EAN does not start with 0, there is no corresponding UPC-A code, ex. 6009705662678.
// gtin: string, //	[optional] GTIN-14, 14-digit number used to identify trade items at various packaging levels. The contained trade item’s EAN or UPC can be derived from it. Ex. GTIN-14 20008236914225 contains 20-Pack of item with UPC 008236914221.
// elid: string, //	[optional] eBay Listing ID, aka. item ID or item number. Item ID is 9 to 12 digits in length. If item is found on eBay.com, you can simply locate the item by http://www.ebay.com/itm/[eLID].
// description: string, //	Item description with length < 515.
// brand: string, //	Brand name or manufacture name with length < 64.
// model: string, //	Item model number with length < 32.
// color: string, //	Item color with length < 32, ex. for clothing, shoes.
// size: string, //	Item size with length < 32, ex. for clothing, shoes.
// dimension: string, //	Item model number with length < 32.
// weight: string, //	Item weight with length < 16.
// category: string, //	Google product taxonomy, https://www.google.com/basepages/producttype/taxonomy.en-US.txt.
// currency: string, //	currency of the lowest_recorded_price. Can be “USD”, “CAD”, “EUR”, “GBP”, “SEK”. Default “” means “USD”.
// lowest_recorded_price: number, //	[optional] Lowest historical price of the item since tracked by our system. Not available for books.
// highest_recorded_price:	number, //	[optional] Highest historical price of the item since tracked by our system. Not available for books.
// images: string[], //	array of image urls.
// offers: offer[], //	offer objects.
// user_data: string,
// }

// export interface offer {
// merchant: string, //	Online store name.
// domain: string, //	Online store domain.
// title: string, //	Item name marketed by the merchant.
// currency: string, //	currency of the list_price & price. Can be “USD”, “CAD”, “EUR”, “GBP”, “SEK”. Default “” means “USD”.
// list_price: number|string, //	Original price from the store or empty string if not available.
// price: number, //	Sale price.
// shipping: string, //	“Free Shipping” or other shipping information if not free.
// condition: string, //	“New” or “Used”
// availability: string, //	Default “” means available or “Out of Stock”
// link: string, //	Shop link of the item.
// updated_t: number, //	unix timestamp of the offer was last updated. 
// }


