import * as React from 'react';
import { Button, Text, View } from 'react-native';

const ProductPage = ({navigation}: {navigation: any}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Product Page</Text>
            <Button
            title="Go to Basket"
            onPress={() => navigation.navigate('Basket')}
            />
        </View>
    );
}

export default ProductPage;