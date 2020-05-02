import React, { Component } from 'react';
import { render } from 'react-dom';
import Register from './components/Register'
import store from './redux/store/store'
import {Provider} from 'react-redux'
import './style.css'; 

class App extends Component {

  render() {
    return (
    <Provider store={store}>
     <Register/>
    </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));