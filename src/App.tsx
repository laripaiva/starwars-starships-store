import * as React from 'react';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux'
import { useFonts } from 'expo-font';
import HeaderButton from './components/HeaderButton';
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
							<HeaderButton onClick={ () => navigation.navigate('Basket') }/>
						)
					})}
				/>
				<Stack.Screen 
					name="ProductPage" 
					component={ProductPage}  
					options={({ navigation }) => ({
						title: '',
						headerRight: () => (
							<HeaderButton onClick={ () => navigation.navigate('Basket') }/>
						)
					})}
				/>
				<Stack.Screen name="Basket" component={Basket} options={{ title: 'cesta' }}/>
			</Stack.Navigator>
      	</NavigationContainer>
    </Provider>
  );
}

export default App;