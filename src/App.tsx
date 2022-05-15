import * as React from 'react';
import { useFonts } from 'expo-font';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import Basket from './pages/Basket';

const Stack = createNativeStackNavigator();

const App = () => {
  let [fontsLoaded] = useFonts({
    'DaysOne-Regular': require('./assets/fonts/DaysOne-Regular.ttf'),
    'Jura-Regular': require('./assets/fonts/Jura-Regular.ttf'),
    'Jura-Bold': require('./assets/fonts/Jura-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}  options={{ title: 'Galáctica Starships' }}/>
        <Stack.Screen name="ProductPage" component={ProductPage} options={{ title: 'Galáctica Starships' }}/>
        <Stack.Screen name="Basket" component={Basket} options={{ title: 'Galáctica Starships' }}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;