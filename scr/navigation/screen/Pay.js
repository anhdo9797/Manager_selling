import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import Action from '../../action';

class Pay extends Component {
  state = {total: 0, codePay: ''};
  getPrice = () => {
    const {total, codePay} = this.state;
    const {arraySell} = this.props;

    if (codePay === '') {
      Alert.alert('Vui lòng nhập mã trước khi thêm');
      return;
    }
    if (arraySell.findIndex(e => e.code === codePay) == -1) {
      Alert.alert(
        'Sản phẩm này không có trong kho/đã hết, vui lòng kiểm tra lại!',
      );
      return;
    } else {
      const object = arraySell.filter(e => e.code === codePay);
      const p = arraySell.findIndex(e => e.code === codePay);
      const payload = {p};
      this.props.pay(payload);
      this.props.over();
      this.setState({total: total + Number(object[0].price), codePay: ''});
      return;
    }
  };
  getPay = () => {
    Alert.alert('Bạn đã thanh toán thành công');
    this.setState({total: ''});
  };
  render() {
    const {total, codePay} = this.state;
    return (
      <View style={seclect.contair}>
        <View style={seclect.screenProduct}>
          <Text style={{fontSize: 20, margin: 10}}>
            Nhập mã sản phẩm vào ô dưới đây để thanh toán:{' '}
          </Text>
          <View style={seclect.addProduct}>
            <TextInput
              placeholder="Nập mã sản phẩm vào"
              style={seclect.inputText}
              onChangeText={text => this.setState({codePay: text})}
              value={codePay}
            />
            <TouchableOpacity onPress={() => this.getPrice()}>
              <Text style={seclect.text}>Thêm</Text>
            </TouchableOpacity>
          </View>
          <View style={seclect.addProduct}>
            <Text style={seclect.text}>Tổng cộng: </Text>
            <Text style={seclect.text}>{total} vnđ</Text>
          </View>
        </View>
        <View style={seclect.screenPay}>
          <TouchableOpacity onPress={() => this.getPay()}>
            <Text style={seclect.textButtom}> THANH TOÁN</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  arraySell: state.sell.arraySell,
});

const mapDispacthToProps = {
  pay: Action.pay,
  over: Action.over,
};
export default connect(mapStateToProps, mapDispacthToProps)(Pay);

const seclect = StyleSheet.create({
  contair: {
    backgroundColor: '#fff59d',
    flex: 1,
  },
  screenProduct: {
    flex: 2,
    backgroundColor: '#fffde7',
    margin: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  screenPay: {
    flex: 1,
    backgroundColor: '#fffde7',
    margin: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButtom: {
    fontSize: 40,
    backgroundColor: 100,
    borderRadius: 10,
  },
  inputText: {
    fontSize: 16,
    height: 50,
    backgroundColor: 50,
  },
  text: {
    fontSize: 20,
    padding: 5,
  },
  addProduct: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingTop: 50,
  },
});
