import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';

import Action from '../../action';

class Save extends Component {
  state = {
    name: '',
    code: '',
    amount: '',
    price: '',
  };
  getError = () => {
    const {arraySell} = this.props;
    const {name, code, amount, price} = this.state;
    const payload = {name, code, amount, price};
    if (name === '' || code === '' || amount === '' || price === '') {
      return Alert.alert('Vui lòng nhập đủ thông tin');
    }
    if (arraySell.findIndex(e => e.code === code) !== -1) {
      return Alert.alert('Sản phẩm này đã tồn tại trong kho');
    } else {
      return (
        this.props.addProduct(payload),
        this.setState({name: '', code: '', amount: '', price: ''})
      );
    }
  };
  render() {
    const {name, code, amount, price} = this.state;
    return (
      <View style={st.contai}>
        <Text
          style={{
            fontSize: 40,
            fontWeight: 'bold',
            paddingHorizontal: 100,
            paddingBottom: 50,
          }}>
          Nhập kho:{' '}
        </Text>

        <View style={st.input}>
          <Text style={st.text}>Tên sản phẩm:</Text>
          <TextInput
            placeholder="?"
            style={st.textInput}
            onChangeText={text => this.setState({name: text})}
            value={name}
          />
        </View>

        <View style={st.input}>
          <Text style={st.text}>Code:</Text>
          <TextInput
            placeholder="?"
            style={st.textInput}
            onChangeText={text => this.setState({code: text})}
            value={code}
          />
        </View>

        <View style={st.input}>
          <Text style={st.text}>Số Lượng:</Text>
          <TextInput
            placeholder="?"
            style={st.textInput}
            onChangeText={text => this.setState({amount: text})}
            value={amount}
            keyboardType="number-pad"
          />
        </View>

        <View style={st.input}>
          <Text style={st.text}>Giá bán:</Text>
          <TextInput
            placeholder="?"
            style={st.textInput}
            onChangeText={text => this.setState({price: text})}
            value={price}
            keyboardType="number-pad"
          />
        </View>

        <View
          style={{flexDirection: 'row', justifyContent: 'center', margin: 30}}>
          <TouchableOpacity
            style={{
              margin: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => this.getError()}>
            <Text style={st.buttom}> Lưu kho</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  arraySell: state.sell.arraySell,
});

const mapDispatchToProps = {
  addProduct: Action.addProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(Save);

const st = StyleSheet.create({
  contai: {
    flex: 1,
    backgroundColor: '#f0f4c3',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  input: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#212121',
  },
  textInput: {
    // width: 200,
    height: 50,
    backgroundColor: 30,
    fontSize: 20,
    // paddingHorizontal: 120,
    borderRadius: 10,
  },
  buttom: {
    fontSize: 25,
    backgroundColor: '#dce775',
    borderRadius: 10,
    padding: 10,
  },
});
