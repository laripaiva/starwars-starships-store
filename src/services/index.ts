import axios, { AxiosResponse } from 'axios';
import { getUrlOfProductsRequest } from '../helpers/api';
import { Product } from '../utils/types';

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
