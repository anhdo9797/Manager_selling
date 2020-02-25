import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import StoreHouse from '../screen/StoreHouse';
import Pay from '../screen/Pay';
import Save from '../screen/Save';

const Drawer = createDrawerNavigator();

const myDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Save">
      <Drawer.Screen name="StoreHouse" component={StoreHouse} />
      <Drawer.Screen name="Pay" component={Pay} />
      <Drawer.Screen name="Save" component={Save} />
    </Drawer.Navigator>
  );
};

export default myDrawer;
