export type Product = {
    name: string;
    manufacturer: string;
    priceInGalacticCredits: number;
}

export type CartItem = {
    product: Product, 
    quantity: number,
}