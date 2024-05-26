const services = require('./services')

async function main(){

    try{
        const names = [];
        const result = await services.getPeople('a');
        for(let count = 0; count <= result.results.length - 1; count++){
            const people = result.results[count];
            names.push(people.name);
        }
        console.log(`names`, names);

    }catch (error){
        console.log('erro interno', error)
    }
}
main()