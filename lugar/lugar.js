const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    const encodedUrl = encodeURI(direccion);
    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${ encodedUrl }`,
        headers: { 'x-rapidapi-key': 'c6cf34cac5mshda976224786dd89p170dacjsn4bded526208c' }
    });


    return resp = await instance.get()
        .then(resp => {

            const direccion = resp.data.name;
            const lat = resp.data.coord.lat;
            const lng = resp.data.coord.lon;

            return {
                direccion,
                lat,
                lng
            };
        })
        .catch(err => {
            console.log(`No hay resultados para ${ direccion }`);
        });

}



module.exports = {
    getLugarLatLng
}