import axios from "axios"
import { BarcodeSpiderLookupResponse } from "./data/product"


// export async function lookupBarcode(upcOrEan: string): Promise<BarcodeSpiderLookupResponse> {
//   const token = process.env.REACT_APP_API_KEY;
  
//     const url =
//     `https://api.barcodespider.com/v1/lookup` +
//     `?upc=${encodeURIComponent(upcOrEan)}` +
//     `&token=${token}`;

//   const res = await fetch(url, { method: "GET" });

//   // Try to surface useful error details
//   const text = await res.text();
//   if (!res.ok) {
//     throw new Error(`BarcodeSpider HTTP ${res.status}: ${text}`);
//   }

//   return JSON.parse(text) as BarcodeSpiderLookupResponse;
// }

interface SearchResponse {
  data: BarcodeSpiderLookupResponse[];
}

export const searchProducts = async (query: string) => {
   try {
    //this causes CORS error. you have to do it in the server side.
    const data = await axios.get<SearchResponse>(
        `https://api.barcodespider.com/v1/lookup?token=${process.env.REACT_APP_API_KEY}&upc=${query}`
    );
    return data;
   } catch (error) {
    if (axios.isAxiosError(error)) {
        console.log("error message: ", error.message);
        return error.message;
    } else {
        console.log("Unexpected very dangerous error occurred.", error);
        return "Unexpected error have occured";
    }
   } 
}