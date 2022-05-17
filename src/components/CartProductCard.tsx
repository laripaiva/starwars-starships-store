import React from 'react';
import styled from 'styled-components';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { getImagePath } from '../helpers/images';
import { CartItem } from '../utils/types';
import { getStandardProductPrice, formatPrice } from '../helpers/pricing';
import RemoveItemButton from './RemoveItemButton';
import { useAppDispatch } from '../hooks';
import { removeOrderFromCart } from '../store/reducers/Cart';

const CartProductCard = ({cartItem}: {cartItem: CartItem}) => {
    const dispatch = useAppDispatch()
    const productPrice = getStandardProductPrice(); 
    const formattedPrice = formatPrice(productPrice);
    const imagePath = getImagePath(cartItem.product.name);

    return (
        <Card>
            <ImageContainer>
                <ImageUI source={imagePath}/>
            </ImageContainer>
            <TextContainer>
                <Title numberOfLines={1}>{cartItem.product.name}</Title>
                <Price numberOfLines={1}>{formattedPrice}</Price>
            </TextContainer>
            <ButtonContainer>
                <RemoveItemButton onClick={ () => dispatch(removeOrderFromCart(cartItem)) }></RemoveItemButton>
            </ButtonContainer>
        </Card>
    );
}

const Card = styled(View)`
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    background: #fff;
    padding: 20px;
    elevation: 1;
`;

const ImageContainer = styled(View)`
    width: 30%;
    height: 100px;
    align-items: center;
`;

const ImageUI = styled(Image)`
    width: 100%;
    height: 100%;
    resize-mode: contain;
`;

const TextContainer = styled(View)`
    width: 50%;
    padding: 0 20px;
    justify-content: center;
`;

const ButtonContainer = styled(View)`
    width: 20%;
    align-items: center;
    justify-content: center;
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

export default CartProductCard;