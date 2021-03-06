import React, { useState, useEffect } from 'react';
import { ScrollView, View, ActivityIndicator, Image } from 'react-native';
import styled from 'styled-components';
import ProductCard from '../components/ProductCard';
import { getProductsFromServer } from '../services';
import { Product } from "../utils/types";
import { useAppDispatch } from '../hooks';
import { selectProduct } from '../store/reducers/Product';

const Home = ({navigation}: {navigation: any}) => {
    const dispatch = useAppDispatch()
    const [loading, setLoading] = useState<boolean>(false);
    const [pagination, setPagination] = useState<number>(1);
    const [products, setProducts] =  useState<Product[]>([]);

    const incrementPagination = () => {
        const totalOfPages = 4
        if (pagination < totalOfPages) {
            setPagination(pagination+1)
        }
    };

    const loadProducts = async () => {
        setLoading(true);
        const result: Product[] = await getProductsFromServer(pagination);
        setProducts(products.concat(result));
        setLoading(false);
    };

    const goToProductPage = (product: Product) => {
        dispatch(selectProduct(product));
        navigation.navigate('ProductPage');
    };

    useEffect(() => {
        loadProducts();
    }, [pagination]);


    return (
        <Wrapper onScrollEndDrag={() => incrementPagination()} >
            {/* <ImageContainer>
                <ImageUI source={require('../assets/images/banner.png')}/>
            </ImageContainer> */}
            <Grid>
                {products.map((product, index) => 
                    <Column key={index}> 
                        <ProductCard onClick={ () => goToProductPage(product) } product={product}/>
                    </Column>
                )}
            </Grid>
            { loading && (<ActivityIndicator />)}
        </Wrapper>
    );
}

const Wrapper = styled(ScrollView)`
    width: 100%;
    height: 100%;
    background: #F2F2F2;
    padding: 10px;
`;

// const ImageContainer = styled(View)`
//     width: 100%;
//     max-height: 220px;
//     padding: 0 10px;
//     align-items: center;
// `;

// const ImageUI = styled(Image)`
//     width: 100%;
//     height: 100%;
//     resize-mode: contain;
// `;

const Grid = styled(View)`
    flex-direction: row;
    flex-wrap: wrap;
`;

const Column = styled(View)`
    width: 50%;
    padding: 10px;
`;

export default Home;