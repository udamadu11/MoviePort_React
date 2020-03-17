import React, { Component } from 'react';
import './App.css';
import Navbar from './component/layout/navbar';
import Footer from './component/layout/footer';
import Landing from './component/home/Landing';

class App extends Component {
  render(){
  return (
    <div>
      <Navbar />
      <Landing />
      <Footer />
      </div>
    );
  }
}

export default App;
