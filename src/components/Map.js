import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import getPosition from '../utils/getPosition';
import getEvents from '../utils/getEvents';
import You from './You';
import Event from './Event';
import './Map.css';
import { MAPS_KEY } from '../utils/consts';

export default class Map extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.getInitPosition();
        this.getEvents();
    }

    getInitPosition = async () => {
        const coords = await getPosition();
        if (!coords.error) {
          this.setState({lat: coords.lat, lng: coords.lng});        
        }
    }
    
    getEvents = async () => {
        const events = await getEvents();
        this.setState({events});
    }

    renderEvents = (events=[]) => events.map((event, i) => (
        <Event 
            info={event}
            id={i.toString()}
            lat={event.address.results[0].geometry.location.lat} 
            lng={event.address.results[0].geometry.location.lng}/>  
    ))
    
    render() {
        const {lat, lng, events} = this.state;
        const {setEventInfo} = this.props;

        const renderEvents = events && events.map((event, i) => (
            <Event
                setEventInfo={setEventInfo}
                info={event}
                key={i.toString()}
                lat={event.address.results[0].geometry.location.lat} 
                lng={event.address.results[0].geometry.location.lng}/>  
        ))

        return (
            <div className="map_container" ref="map_container">
                <GoogleMap
                    bootstrapURLKeys={{key: MAPS_KEY}}
                    center={{lat: lat, lng: lng}}
                    zoom={17}>

                    {renderEvents}

                    <You lat={lat} lng={lng} />
                    
                </GoogleMap>
            </div>
        )
    }

}