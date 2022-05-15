import * as React from 'react';
import styled from 'styled-components';
import { ScrollView, Button, View } from 'react-native';
import ProductCard from '../components/ProductCard';

const Home = ({navigation}: {navigation: any}) => {
  return (
    <Wrapper>
        <Grid>
            <Column> 
                <ProductCard/>
            </Column>
        </Grid>
    </Wrapper>
);
}

const Wrapper = styled(ScrollView)`
    width: 100%;
    height: 100%;
    backgroundColor: #F2F2F2;
`;

const Grid = styled(View)`
    flexDirection: row;
    flexWrap: wrap;
`;

const Column = styled(View)`
    width: 46%;
    margin: 2%;
`;

export default Home;