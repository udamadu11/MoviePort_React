import React, { Component } from 'react';
import './App.css';
import Navbar from './compornent/navbar';
import Footer from './compornent/footer';
class App extends Component {
  render(){
  return (
    <div>
      <Navbar />
      <Footer />
      </div>
    );
  }
}

export default App;
