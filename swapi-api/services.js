const axios = require('axios');
const URL = 'https://swapi.dev/people';


async function getPeople(name) {
    const url = await axios.get(`${URL}people/1`);
    const response =  await axios.get(url);
    return response.data;    
    // console.log(response.data);
   
    }
    .then(){

        c
    }catch(function error){
        console.log('error', error);
    }







module.exports = {
    getPeople

}
