import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import Basket from './pages/Basket';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}  options={{ title: 'Star Wars Starships' }}/>
        <Stack.Screen name="ProductPage" component={ProductPage} options={{ title: 'Star Wars Starships' }}/>
        <Stack.Screen name="Basket" component={Basket} options={{ title: 'Star Wars Starships' }}/>
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

export default App;