import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MovieDetails from '../screens/MovieDetails';
import Home from '../screens/Home';
import Login from '../screens/Login';

const Routes: FC = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
           <Stack.Screen
          name="Login"
          component={Login}
         
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MovieDetails" component={MovieDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;