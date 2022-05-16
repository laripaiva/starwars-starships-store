import React, { useState, useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { useAppSelector } from '../hooks';

const ProductPage = ({navigation}: {navigation: any}) => {
    const productSelected = useAppSelector((state) => state.product);
    
    console.log(productSelected);

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