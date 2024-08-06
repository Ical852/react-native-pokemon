import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomePage, MyPokemonPage } from '../screens';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="MyPokemon" component={MyPokemonPage} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
