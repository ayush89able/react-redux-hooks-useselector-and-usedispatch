import React, { Component } from 'react';
import { render } from 'react-dom';
import Register from './components/Register'
import store from './redux/store/store'
import CSSReset from '@tds/core-css-reset'
import {Provider} from 'react-redux'
import './style.css'; 

class App extends Component {

  render() {
    return (
      <>
      <CSSReset />
      <Provider store={store}>
      <Register/>
      </Provider>
    </>
    );
  }
}

render(<App />, document.getElementById('root'));