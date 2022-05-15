import * as React from 'react';
import styled from 'styled-components';
import {Text, View, Image} from 'react-native';

const ProductCard = () => {
    return (
        <Card>
            <ImageContainer>
                <ImageUI source={require('../assets/starships/V-wing.png')}/>
            </ImageContainer>
            <Title>Calamari Cruiser</Title>
            <Price>R$ 20,00</Price>
        </Card>
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