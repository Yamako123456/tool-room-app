import axios from "axios"
import { BarcodeSpiderLookupResponse } from "./data/product";


interface SearchResponse {
  data: BarcodeSpiderLookupResponse;
}

export const searchProductByUPC = async (query: string) => {
   try {
    //this causes CORS error. you have to do it in the server side.
    const res = await axios.get<BarcodeSpiderLookupResponse>(
        `https://api.barcodespider.com/v1/lookup?token=${process.env.REACT_APP_API_KEY}&upc=${query}`
    );
    return res;

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