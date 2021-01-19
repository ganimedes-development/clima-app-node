// const axios = require('axios');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('./config/yargs').argv;

// console.log(argv.direccion);
// argv.direccion


// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log)

// clima.getClima(4.6097, -74.199)
//     .then(console.log)
//     .catch(console.log)


const getInfo = async(direccion) => {
    // Mi forma _________________

    // const resp = lugar.getLugarLatLng(direccion)
    //     .then(lugar => {

    //         clima.getClima(lugar.lat, lugar.lng)
    //             .then(clim => {
    //                 console.log(`El clima de ${direccion} es de ${ clim } grados`);
    //                 // return `El clima de ${direccion} es de ${ clim } grados`;
    //             })
    //             .catch(console.log(`No se pudo determinar el clima de ${ direccion }`));
    //     });

    //Profersor __________________________

    //Primero se define el async a getInfo y el await a las funciones coords y temp
    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${direccion} es de ${ temp } grados`;
    } catch (e) {
        return `No se pudo determinar el clima de ${ direccion }`;
    }


}


// console.log(argv.direccion);
getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);