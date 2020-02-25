const addProduct = payload => ({type: 'ADD_PRODUCT', payload});
const pay = payload => ({type: 'PAY', payload});
const over = payload => ({type: 'OVER', payload});

const Action = {
  addProduct,
  pay,
  over,
};

export default Action;
