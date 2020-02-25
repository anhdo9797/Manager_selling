const sellState = {
  arraySell: [],
};

const reducerSell = (state = sellState, action) => {
  const {type, payload} = action;
  switch (type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        arraySell: [
          {
            name: payload.name,
            code: payload.code,
            amount: payload.amount,
            price: payload.price,
          },
          ...state.arraySell,
        ],
      };
    case 'PAY':
      const arraySell1 = state.arraySell.slice(0, payload.p);
      const arraySell2 = state.arraySell.slice(payload.p + 1);
      const item = [
        {
          ...state.arraySell[payload.p],
          amount: state.arraySell[payload.p].amount - 1,
        },
      ];
      return {arraySell: arraySell1.concat(item, arraySell2)};
    case 'OVER':
      return {
        arraySell: state.arraySell.filter(e => e.amount !== 0),
      };

    default:
      return state;
  }
};

export default reducerSell;
