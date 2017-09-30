const getPosition = () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                resolve({
                    error: false,
                    lat: position.coords.latitude, 
                    lng: position.coords.longitude
                }) 
            }, 
            (error) => {
                reject({
                    error: true,
                    message: error
                })
            }, 
            {
              enableHighAccuracy: true,
              maximumAge: 0
        });
    })  
}

export default getPosition;