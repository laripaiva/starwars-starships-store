import React from 'react';
import styled from 'styled-components';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { getImagePath } from '../helpers/images';
import { Product } from '../utils/types';
import { getStandardProductPrice, formatPrice } from '../helpers/pricing';

type Props = {
    product: Product;
    onClick: () => void;
};

const ProductCard = ( {product, onClick }: Props ) => {
    const productPrice = getStandardProductPrice(); 
    const formattedPrice = formatPrice(productPrice);
    const imagePath = getImagePath(product.name);

    return (
        <TouchableOpacity onPress={onClick}> 
            <Card>
                <ImageContainer>
                    <ImageUI source={imagePath}/>
                </ImageContainer>
                <TextContainer>
                    <Title numberOfLines={1}>{product.name}</Title>
                    <Price numberOfLines={1}>{formattedPrice}</Price>
                </TextContainer>
            </Card>
        </TouchableOpacity>
        
    );
}

const Card = styled(View)`
    background-color: white;
    border-radius: 8px;
    padding: 12px;
    elevation: 1;
`;

const ImageContainer = styled(View)`
    width: 100%;
    height: 140px;
    align-items: center;
`;

const ImageUI = styled(Image)`
    width: 100%;
    height: 100%;
    resize-mode: contain;
`;

const TextContainer = styled(View)`
    margin-top: 8px;
`;

const Title = styled(Text)`
    font-size: 12px;
    font-family: DaysOne-Regular;;
    color: #0D0D0D;
`;

const Price = styled(Text)`
    font-size: 16px;
    font-family: OpenSans;
    color: #0D0D0D;
`;

export default ProductCard;