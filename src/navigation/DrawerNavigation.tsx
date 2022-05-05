import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigation from './StackNavigation';
import DrawerProfile from './DrawerProfile';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerShown: true,
        drawerType: 'front',
        headerStyle: {
          backgroundColor: 'cyan'
        }
      }}
      
      drawerContent={ props => <DrawerProfile {...props} />}
    >
      <Drawer.Screen name="StackNavigation" options={{ title: '' }} component={StackNavigation} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation