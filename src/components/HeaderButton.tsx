import * as React from 'react';
import { IconButton } from 'react-native-paper';

type Props = {
    onClick: () => void;
};

const HeaderButton = ( { onClick }: Props ) => {
    return (
        <IconButton
            icon="basket-outline"
            color="#fff"
            size={30}
            onPress={onClick}
        />
    )
}

export default HeaderButton;