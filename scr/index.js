import React from 'react';
import {Provider} from 'react-redux';
import Mystack from './navigation/navigator';
import mainStore from './redux/store';

const store = mainStore();

export default main=()=> {
  return (
    <Provider store={store}>
      <Mystack />
    </Provider>
  );
}
