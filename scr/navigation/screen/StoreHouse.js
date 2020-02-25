import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import Product from '../../components/Product';

class StoreHouse extends Component {
  sate = {
    totalAmount: 0,
  };
  totalAmount = () => {
    const {arraySell} = this.props;
    const {totalAmount} = this.state;
    for (var i = 0; i < arraySell.length; i++) {
      this.setState({totalAmount: Number(arraySell[i].amount) + totalAmount});
    }

    return totalAmount;
  };
  render() {
    const {arraySell} = this.props;
    return (
      <View style={{flex: 1}}>
        <View style={select.main}>
          <FlatList
            data={arraySell}
            extraData={arraySell}
            renderItem={({item}) => <Product work={item} />}
          />
        </View>
        <View style={select.bar}>
          <View style={select.viewText}>
            <Text style={select.text}>
              Các mặt hàng trong kho hiện tại là:{' '}
            </Text>
            <Text style={select.text}> {arraySell.length}</Text>
          </View>

          <View style={select.viewText}>
            <Text style={select.text}>Tổng sản phẩm còn trong kho : </Text>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  arraySell: state.sell.arraySell,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(StoreHouse);

const select = StyleSheet.create({
  bar: {
    backgroundColor: '#948815',
    flex: 1,
  },
  main: {
    backgroundColor: '#7a775b',
    flex: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
  },
  viewText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});
