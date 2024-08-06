import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomePage, MyPokemonPage } from '../screens';
import MenuBarItem from './MenuBarItem';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { height: 60, paddingBottom: 10 },
        tabBarLabelStyle: { fontSize: 12 }
      }}>
      <Tab.Screen 
        name="Home" 
        component={HomePage}
        options={() => ({
          header: () => null,
          tabBarIcon: ({ focused }) => (
            <MenuBarItem focused={focused} type='home' />
          ),
        })}
      />
      <Tab.Screen 
        name="Caught"
        component={MyPokemonPage}
        options={() => ({
          header: () => null,
          tabBarIcon: ({ focused }) => (
            <MenuBarItem focused={focused} type='caught' />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
