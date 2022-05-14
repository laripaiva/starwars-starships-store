import * as React from 'react';
import { Button, Text, View } from 'react-native';

const Home = ({navigation}: {navigation: any}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button 
        title="Go to Product Page"
        onPress={() => navigation.navigate('ProductPage')}
      />
    </View>
  );
}

export default Home;