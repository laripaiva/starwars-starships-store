import { CartItem, Product} from "../../utils/types";

export const isTheProductInTheCart = (cartOrders: CartItem[], product: Product) => {
    return cartOrders.some(order => order.product.name === product.name);
}
    
export const getOrderIndexInCart = (cartOrders: CartItem[], product: Product) => {
    return cartOrders.findIndex(order => order.product.name === product.name);
}