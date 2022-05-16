const productPrice: number = 1000;

export const getStandardProductPrice = () => productPrice;

export const formatPrice = (price : number) => {
    let formattedPrice = price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    formattedPrice = '$ ' + formattedPrice + ',00';

    return formattedPrice;
};