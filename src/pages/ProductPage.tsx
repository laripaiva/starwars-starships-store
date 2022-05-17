import React from 'react';
import { Image, Text, View } from 'react-native';
import styled from 'styled-components';
import { getImagePath } from '../helpers/images';
import { useAppSelector } from '../hooks';

const ProductPage = ({navigation}: {navigation: any}) => {
    const product = useAppSelector((state) => state.product);
    const imagePath = getImagePath(product.name);

    return (
        <Wrapper>             
            <ImageContainer>
                <ImageUI source={imagePath}/>
            </ImageContainer>
            <TextContainer>
                <Title numberOfLines={2}>{product.name}</Title>
            </TextContainer>
        </Wrapper>
    );
};

const Wrapper = styled(View)`
    width: 100%;
    height: 100%;
    backgroundColor: #F2F2F2;
`;

const ImageContainer = styled(View)`
    width: 100%;
    height: 250px;
    padding: 12px;
    align-items: center;
    background: #fff;
`;

const ImageUI = styled(Image)`
    width: 100%;
    height: 100%;
    resize-mode: contain;
`;

const TextContainer = styled(View)`
    width: 100%;
    padding: 12px;
    background: #fff;
`;

const Title = styled(Text)`
    fontSize: 24px;
    fontFamily: OpenSans;
    fontWeight: bold;
    color: #0D0D0D;
`;

// const Title = styled(Text)`
//     fontSize: 24px;
//     fontFamily: OpenSans;
//     fontWeight: bold;
//     color: #0D0D0D;
// `;


export default ProductPage;