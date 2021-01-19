const axios = require('axios')



const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=4080f3222dff7547bea6b21ec01a3713&units=metric`);

    return resp.data.main.temp;

}


module.exports = {
    getClima
}