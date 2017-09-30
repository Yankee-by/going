const getAddress = (decoder) => {
    if (decoder.address.status === 'OK') {
        const street = decoder.address.results[0].address_components[1].short_name;
        const building = decoder.address.results[0].address_components[0].short_name;
        return street + ', ' + building
    } else {
        return 'Address error'
    }
}

export default getAddress;