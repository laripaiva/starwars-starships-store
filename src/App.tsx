import * as React from 'react';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IconButton } from 'react-native-paper';
import { Provider } from 'react-redux'
import { useFonts } from 'expo-font';
import store from './store';
import Home from './pages/Home'; 
import ProductPage from './pages/ProductPage';
import Basket from './pages/Basket';

const Stack = createNativeStackNavigator();

const App = () => {
  let [fontsLoaded] = useFonts({
    'DaysOne-Regular': require('./assets/fonts/DaysOne-Regular.ttf'),
    'OpenSans': require('./assets/fonts/OpenSans.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerStyle: {
              backgroundColor: '#375C8C',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontFamily: 'DaysOne-Regular',
          },
        }}>
        <Stack.Screen 
        	name="Home" 
			component={Home}  
			options={({ navigation }) => ({
				title: 'GALACTICA SHOP',
				headerRight: () => (
					<IconButton
						icon="basket"
						color="#fff"
						size={30}
						onPress={() => navigation.navigate('Basket')}
					/>
				)
			})}
		/>
        <Stack.Screen 
        	name="ProductPage" 
			component={ProductPage}  
			options={({ navigation }) => ({
				title: '',
				headerRight: () => (
					<IconButton
						icon="basket"
						color="#fff"
						size={30}
						onPress={() => navigation.navigate('Basket')}
					/>
				)
			})}
		/>
        <Stack.Screen name="Basket" component={Basket} options={{ title: 'CESTA' }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;