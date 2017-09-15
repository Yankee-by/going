import React, { Component } from 'react';
import './App.css';
import GoogleMap from 'google-map-react';
import {getPosition} from './utils';

const You = () => {
  return (
    <div className='you'>YOU!!!</div>
  )
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  getCurrentPosition = async () => {
    const coords = await getPosition();
    if (!coords.error) {
      this.setState({lat: coords.lat, lng: coords.lng})
    } else {
      console.log('getCurrentPosition error: ', coords.message)
    }
    
    
  }


  componentWillMount() {
    this.getCurrentPosition()
  }

  render() {
    const {lat, lng} = this.state;
    return (
      <div className='map_container'>
        <GoogleMap
            center={[lat, lng]}
            zoom={15}>
              <You 
                lat={lat} 
                lng={lng}/>
        </GoogleMap>
      </div>
    );
  }
}