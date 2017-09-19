import React, { Component } from 'react';
import './App.css';
import logo from './assets/logo.png';
import { getPosition } from './utils/utils';
import { getGeoInfo, getEvents } from './utils/fetching';
import Spin from './components/Spin';
import Map from './components/Map';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    this.getInitPosition();
    this.getEvents();
  }

  getEvents = async () => {
    await getEvents();
  }

  getInitPosition = async () => {
    const coords = await getPosition();


    // const coords = {lat: 52.415345,   lng: 30.938137,}
    if (!coords.error) {
      this.setState({lat: coords.lat, lng: coords.lng});
      
      this.getInitBoundRect(coords.lat, coords.lng);
    }

  }

  getInitBoundRect = async (lat, lng) => {
    const geoInfo = await getGeoInfo(lat, lng);
    console.log('geoInfo', geoInfo)
    if (geoInfo.status === 'OK') {
      this.setState({bound: geoInfo.results[1].geometry.bounds})
    }

  }

  render() {
    const {lat, lng, bound} = this.state;

    console.log('state', this.state)

    return (
      <div className='main_container'>
        <div className='header'>
          <img src={logo} alt="logo" className='logo'/>
        </div>
        {bound ? <Map lat={lat} lng={lng} bound={bound}/> : <Spin />}
      </div>
    )

  }
}