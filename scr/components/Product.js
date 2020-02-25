import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

class Product extends Component {
  render() {
    const {name, code, price, amount} = this.props.work;
    return (
      <View style={select.contair}>
        <View style={select.min}>
          <Text style={select.text}> - Tên sản phẩm: </Text>
          <Text style={select.text}>{name} </Text>
        </View>

        <View style={select.min}>
          <Text style={select.text}> - Mã sản phẩm: </Text>
          <Text style={select.text}>{code} </Text>
        </View>

        <View style={select.min}>
          <Text style={select.text}> - Số lượng còn lại: </Text>
          <Text style={select.text}>{amount} </Text>
        </View>

        <View style={select.min}>
          <Text style={select.text}> - Giá bán: </Text>
          <Text style={select.text}>{price}đ</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  arraySell: state.sell.arraySell,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Product);

const select = StyleSheet.create({
  contair: {
    backgroundColor: '#fff9c4',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  min: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 25,
  },
});
