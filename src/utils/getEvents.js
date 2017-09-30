const getEvents = () => {
    console.log('getEvents')
    return fetch('https://going-cool.herokuapp.com/api/events')
    .then((events) => events.json())
    .then((events) => events)
}

export default getEvents;