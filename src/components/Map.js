import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import { fitBounds } from 'google-map-react/utils';
import You from './You';
import './Map.css';
import { MAPS_KEY } from '../utils/consts';

export default class Map extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        const map_container = this.refs.map_container;
        
        this.setState({mapW: map_container.clientWidth, mapH: map_container.clientHeight})
    }

    

    render() {
        const {lat, lng, bound} = this.props;
        const {mapW, mapH} = this.state;
        const size = {
            width: mapW,
            height: mapH
        }
        console.log('SIZE', size)
        const bounds = {
            ne: bound.northeast,
            sw: bound.southwest
        }
        const {center, zoom} = fitBounds(bounds, size);
        console.log('center, zoom', center, zoom)
        return (
            <div className="map_container" ref="map_container">
                <GoogleMap
                    bootstrapURLKeys={{key: MAPS_KEY}}
                    center={{lat: lat, lng: lng}}
                    zoom={zoom + 2}>

                    <You lat={lat} lng={lng} />

                </GoogleMap>
            </div>
        )
    }

}


// const Map = ({lat, lng}) => {
//     console.log('Map',{lat, lng})
//     return (
//       <div className="map_container">
//         <GoogleMap
//             center={[lat, lng]}
//             zoom={15}>
//         </GoogleMap>
//       </div>
//     )
// }

// export default Map;