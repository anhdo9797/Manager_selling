import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import sell from '../../asset/sell.png';

export default class Home extends Component {
  render() {
    return (
      <View style={select.contair}>
        <View style={select.homeScreen}>
          <Image source={sell} style={select.image} />
        </View>
        <View style={select.mainScreen}>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: '#bf8900'}}>
            Manager Selling
          </Text>
        </View>
        <View style={select.buttomScreen}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Save')}>
            <Text style={select.text}>Nhập kho</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('StoreHouse')}>
            <Text style={select.text}>Quản lý kho</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Pay')}>
            <Text style={select.text}>Thanh Toán</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={select.text}>Hướng dẫn</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const select = StyleSheet.create({
  contair: {
    backgroundColor: '#f0f4c3',
    flex: 1,
  },
  homeScreen: {
    backgroundColor: '#c5c98d',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainScreen: {
    backgroundColor: '#bfc47a',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttomScreen: {
    flex: 2,
    backgroundColor: '#babd9d',
  },
  image: {
    width: 150,
    height: 150,
  },
  text: {
    fontSize: 25,
    color: '#826969',
    backgroundColor: '#fffeed',
    padding: 10,
    margin: 20,
    justifyContent: 'center',
    borderRadius: 20,
  },
});
