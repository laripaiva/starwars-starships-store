import * as React from 'react';
import { Button } from 'react-native-paper';
import styled from 'styled-components';

type Props = {
    onClick: () => void;
};

const CheckoutButton = ( { onClick }: Props ) => {
    return (
        <CustomCheckoutButton
            color="#375C8C"
            mode="contained"
            onPress={onClick}
		>
            Finalizar compra
        </CustomCheckoutButton>
    )
}

const CustomCheckoutButton = styled(Button)`
    width: 80%;
    height: 50px;
    border-radius: 8px;
    justify-content: center;
`;

export default CheckoutButton;