import React, { FC } from 'react';
import styled from 'styled-components';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import { Product } from "../utils/types";

type Props = {
    product: Product;
    onClick: () => void;
  };
  
const ProductCard = ( {product, onClick }: Props ) => {
    return (
        <TouchableOpacity onPress={onClick}> 
            <Card>
                <ImageContainer>
                    <ImageUI source={require('../assets/starships/V-wing.png')}/>
                </ImageContainer>
                <Title>{product.name}</Title>
                <Price>${product.cost_in_credits}</Price>
            </Card>
        </TouchableOpacity>
        
    );
}

const Card = styled(View)`
    minHeight: 220px;
    backgroundColor: white;
    borderRadius: 8px;
    padding: 8px;
`;

const ImageContainer = styled(View)`
    width: 100%;
    height: 180px;
    alignItems: center;
`;

const ImageUI = styled(Image)`
    width: 100%;
    height: 100%;
    resizeMode: contain;
`;

const Title = styled(Text)`
    fontSize: 16px;
    fontFamily: Jura-Regular;
`;

const Price = styled(Text)`
    fontSize: 18px;
    fontFamily: DaysOne-Regular;
    marginTop: 4px;
`;

export default ProductCard;