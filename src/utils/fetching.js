import { GEOCODER_KEY } from './consts';

export const getGeoInfo = (lat, lng) => {
    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GEOCODER_KEY}`)
    .then(info => info.json())
    .then(info => info)
};

export const getEvents = () => {
    console.log('getEvents')
    return fetch('https://going-cool.herokuapp.com/api/events')
    .then((events) => events.json())
    .then((events) => {
        console.log('events', events)
    })
}