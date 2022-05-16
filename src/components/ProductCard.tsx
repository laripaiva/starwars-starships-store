import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Product } from '../utils/types';
import { getStandardProductPrice, formatPrice } from '../helpers/pricing';

type Props = {
    product: Product;
    onClick: () => void;
};

const ProductCard = ( {product, onClick }: Props ) => {
    const productPrice: number = getStandardProductPrice(); 
    const formattedPrice: string = formatPrice(productPrice);

    return (
        <TouchableOpacity onPress={onClick}> 
            <Card>
                <ImageContainer>
                    <ImageUI source={require('../assets/starships/V-wing.png')}/>
                </ImageContainer>
                <Title numberOfLines={1}>{product.name}</Title>
                <Price numberOfLines={1}>{formattedPrice}</Price>
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

const Title = styled(Text)`
    fontSize: 12px;
    fontFamily: OpenSans;
    fontWeight: bold;
    color: #0D0D0D;
`;

const Price = styled(Text)`
    fontSize: 14px;
    fontFamily: OpenSans;
    fontWeight: bold;
    marginTop: 12px;
    color: #0D0D0D;
`;

export default ProductCard;