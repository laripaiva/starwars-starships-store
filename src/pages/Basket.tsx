import * as React from 'react';
import { ScrollView, Text, View } from 'react-native';
import styled from 'styled-components';
import CheckoutButton from '../components/CheckoutButton';
import CartProductCard from '../components/CartProductCard';
import { useAppDispatch, useAppSelector } from '../hooks';
import { emptyCart } from '../store/reducers/Cart';

const Basket = ({navigation}: {navigation: any}) => {
    const dispatch = useAppDispatch()
    const cartItems = useAppSelector((state) => state.cart);

    const checkout = () => {
        dispatch(emptyCart());
        alert('Compra finalizada com sucesso! :D');
        navigation.navigate('Home');
    }

    if (cartItems.length === 0) {
        return (
            <EmptyCart>
                <CustomText> O carrinho está vazio! =( </CustomText>
            </EmptyCart>
        )
    }

    return (
        <Wrapper>   
            <Grid>
                {cartItems.map((cartItem, index) => 
                    <Row key={index}> 
                        <CartProductCard cartItem={cartItem} />
                    </Row>
                )}
            </Grid>
            <FooterContainer>
                <CheckoutButton onClick={ () => checkout() }/>
            </FooterContainer>
        </Wrapper>
    );
}

const Wrapper = styled(View)`
    width: 100%;
    height: 100%;
`;

const Grid = styled(ScrollView)`
    padding: 10px 0;
`;

const Row = styled(View)`
    padding: 10px 0;
`;

const EmptyCart = styled(View)`
    align-items: center;
`;

const CustomText = styled(Text)`
    font-size: 20px;
    font-family: OpenSans;
    color: #595959;
    margin: 20px;
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

export default Basket;