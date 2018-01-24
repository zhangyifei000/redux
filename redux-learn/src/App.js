import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import todoApp from './to-do-list/reducers/reducers.js';
import Container from './to-do-list/container';

const store = createStore(todoApp); 
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
     </Provider>
    );
  }
}

export default App;
