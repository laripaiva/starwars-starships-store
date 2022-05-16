export const getUrlOfProductsRequest  = (pagination: number) => {
    const endpoint = 'https://swapi.dev/api/starships/';

    if (pagination === 1) {
        return endpoint;
    }

    return `${endpoint}?page=${pagination}`;
} 