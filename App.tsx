import React from 'react';
import { Provider } from 'react-redux';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/routes';
import store from './src/redux/store';

const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
