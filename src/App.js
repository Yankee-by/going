import React, { Component } from 'react';
import './App.css';
import logo from './assets/logo.png';
// import Spin from './components/Spin';
import Map from './components/Map';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {

    return (
      <div className='main_container'>
        <div className='header'>
          <img src={logo} alt="logo" className='logo'/>
        </div>
        <Map />
      </div>
    )

  }
}