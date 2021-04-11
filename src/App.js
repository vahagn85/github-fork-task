import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store';
import './App.css';
import MainRouting from './components/routing/MainRouting'

function App() {
  return (
      <Provider store={store}>
          <Router>
              <MainRouting/>
          </Router>
      </Provider>
  );
}

export default App;
