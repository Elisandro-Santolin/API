const axios = require('axios');
const URL = 'https://swapi.dev/api/people';


async function getPeople(name) {
    const url = (`${URL}/?search=${name}&format=json`);
    const response =  await axios.get(url);
    return response.data;    
    // console.log(response.data);
 
    }
    // getPeople('r2')

    // .then(function (retorno){

    //     console.log(retorno);
    // })
    // .catch(function (erro){
    //     console.error('deu ruim', erro)
    // });

module.exports = {
    getPeople
}