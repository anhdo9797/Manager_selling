import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Save from '../screen/Save';
import StoreHouse from '../screen/StoreHouse';
import Pay from '../screen/Pay';
import Home from '../screen/Home';
import myDrawer from '../Drawer/MyDrawer';

const Stack = createStackNavigator();

const mystack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Save" component={myDrawer} />
        <Stack.Screen name="StoreHouse" component={StoreHouse} />
        <Stack.Screen name="Pay" component={Pay} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default mystack;
