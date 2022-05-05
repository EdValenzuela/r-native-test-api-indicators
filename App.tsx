import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './src/navigation/DrawerNavigation';
import { IndicatorProvider } from './src/context/IndicatorContext';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <AppState>
          <DrawerNavigation/>
        </AppState>
      </NavigationContainer>
    </>
  )
}

const AppState = ({ children }: any) => {
  return (
    <IndicatorProvider>
      { children }
    </IndicatorProvider>
  )
}

export default App;
