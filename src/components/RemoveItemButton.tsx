import * as React from 'react';
import { IconButton } from 'react-native-paper';

type Props = {
    onClick: () => void;
};

const RemoveItemButton = ( { onClick }: Props ) => {
    return (
        <IconButton
            icon="delete-forever"
            color="#ff6961"
            size={30}
            onPress={onClick}
        />
    )
}

export default RemoveItemButton;