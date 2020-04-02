import React, { Component } from 'react';
import './App.css';
import Navbar from './component/layout/navbar';
import Footer from './component/layout/footer';
import Landing from './component/home/Landing';
import store from './store';
import {Provider} from 'react-redux';
class App extends Component {
  render(){
  return (
    <Provider store={store}>
      <Navbar />
      <Landing />
      <Footer />
    </Provider>
    );
  }
}

export default App;
