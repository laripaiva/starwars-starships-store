import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import styled from 'styled-components';
import { getImagePath } from '../helpers/images';
import { getStandardProductPrice, formatPrice } from '../helpers/pricing';
import { useAppSelector } from '../hooks';
import BuyButton from  '../components/BuyButton';

const ProductPage = ({navigation}: {navigation: any}) => {
    const product = useAppSelector((state) => state.product);
    const imagePath = getImagePath(product.name);
    const productPrice = getStandardProductPrice(); 
    const formattedPrice = formatPrice(productPrice);


    const havePassengersInfo = product.passengers === 'unknown' ? false : true;
    const haveLengthInfo = product.length === 'unknown' ? false : true;
    const haveCrewInfo = product.crew === 'unknown' ? false : true;

    const addOrder = () => {
        console.log('addOrder');
    };

    return (
        <Wrapper>             
            <ImageContainer>
                <ImageUI source={imagePath}/>
            </ImageContainer>
            <TextContainer>
                <Title numberOfLines={2}>{product.name}</Title>
                <Subtitle>
                    Descrição do produto:
                </Subtitle>
                <CustomText>
                    A {product.name} é uma espaçonave do universo Star Wars.
                    { haveLengthInfo && ` Ela apresenta ${product.length} metros de comprimento.`}
                    { havePassengersInfo && ` Sua capacidade de lotação é de ${product.passengers} passageiro(s).`}
                    { haveCrewInfo && ` Além disso, é necessário cerca de ${product.crew} tripulante(s) para operar essa nave.`}
                </CustomText>   
                <Subtitle>
                    {formattedPrice}
                </Subtitle>              
            </TextContainer>
            <FooterContainer>
                <BuyButton onClick={ () => addOrder() }/>
            </FooterContainer>
        </Wrapper>
    );
};

const Wrapper = styled(View)`
    width: 100%;
    height: 100%;
    background: #F2F2F2;
`;

const ImageContainer = styled(View)`
    width: 100%;
    height: 250px;
    padding: 20px;
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
    padding: 20px;
    background: #fff;
`;

const Title = styled(Text)`
    font-size: 24px;
    font-family: DaysOne-Regular;
    color: #0D0D0D;
`;

const Subtitle = styled(Text)`
    font-size: 16px;
    font-family: OpenSans;
    font-weight: bold;
    color: #0D0D0D;
    margin: 20px 0 4px 0;
`;

const CustomText = styled(Text)`
    font-size: 16px;
    font-family: OpenSans;
    color: #595959;
`;

const FooterContainer = styled(View)`
    position: absolute;
    background: #fff;
    padding: 20px;
    align-items: center;
    left: 0;
    right: 0;
    bottom: 0;
`;

export default ProductPage;