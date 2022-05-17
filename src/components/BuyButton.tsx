import * as React from 'react';
import { Button } from 'react-native-paper';
import styled from 'styled-components';

type Props = {
    onClick: () => void;
};

const BuyButton = ( { onClick }: Props ) => {
    return (
        <CustomBuyButton
            icon="basket"
            color="#375C8C"
            mode="contained"
            onPress={onClick}
		>
            Comprar
        </CustomBuyButton>
    )
}

const CustomBuyButton = styled(Button)`
    width: 80%;
    height: 50px;
    border-radius: 8px;
    justify-content: center;
`;

export default BuyButton;