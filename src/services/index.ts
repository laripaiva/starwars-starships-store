import axios, { AxiosError, AxiosResponse } from "axios";
import { Product } from "../utils/types";

const getUrlOfProductsRequest  = (pagination: number) => {
    const endpoint = 'https://swapi.dev/api/starships/';

    if (pagination === 1) {
        return endpoint;
    }

    return `${endpoint}?page=${pagination}`;
} 

export const getProductsFromServer = async (pagination: number) => {
    try {
        const url = getUrlOfProductsRequest(pagination);   
        const response: AxiosResponse = await axios.get<Product[]>(url);
        return response.data.results;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          return error.message;
        } 
        return 'An unexpected error occurred';
      }
};
