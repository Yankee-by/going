import { GEOCODER_KEY } from './consts';

export const getGeoInfo = (lat, lng) => {
    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GEOCODER_KEY}`)
    .then(info => info.json())
    .then(info => info)
};