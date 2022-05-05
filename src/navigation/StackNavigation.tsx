import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DetailScreen from '../screens/DetailScreen';
import HomeScreen from '../screens/HomeScreen';

export type RootStackParams = {
  Inicio: undefined,
  Detalle: { codigo: string }
}

const Stack = createStackNavigator<RootStackParams>();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName='Inicio'
      screenOptions={{
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        headerStyle:{
          elevation: 0,
          shadowColor: 'transparent'
        },
        cardStyle:{
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="Inicio" options={{title: 'Indicadores'}} component={HomeScreen} />
      <Stack.Screen name="Detalle" component={DetailScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigation