// Import required modules and promisify callback-based functions
const { timeEnd } = require('console');
const util = require('util');
const getUserAsync = util.promisify(getUser);
const getAddressAsync = util.promisify(getAddress);
const getPhoneAsync = util.promisify(getPhone);

// Simulate a function to retrieve user data with a 1-second delay
function getUser(callback) {
    setTimeout(function () {
        // Return user data to the callback function
        return callback (null, {
            id: 345,
            name: 'John',
            burn: new Date()    
        })
    }, 1000);
}

// Simulate a function to retrieve address data by user ID with a 2-second delay
function getAddress(idUser, callback) {
    setTimeout(()=> {
        // Return address data to the callback function
        return callback (null, {
            street: 'coast hunter',
            region: 'west'
        })
    }, 2000);
}

// Simulate a function to retrieve phone data by user ID with a 2-second delay
function getPhone(idUser, callback) {
    setTimeout(() => {
        // Return phone data to the callback function
        return callback (null, {
            ddd: '54',
            phone: '991030295'
        })
    }, 2000);
}

// Main function to demonstrate the use of promisified functions
async function main (){
    try{
        
        // Start timer to measure the execution time of the promises
        //console.time('promiss')
        
        // Retrieve user data using the promisified getUser function
        const user = await getUserAsync();
        
        // Retrieve address data using the promisified getAddress function
        const address = await getAddressAsync(user.id);
        
        // Retrieve phone data using the promisified getPhone function
        const phone = await getPhoneAsync(user.id);

        // Log the retrieved data in a formatted string
        console.log(`
            Nome: ${user.id} ${user.name},
            Endereco: ${address.street}, ${address.region}
            Telefone: (${phone.ddd}) ${phone.phone}
        `)
        
        // Commented out to prevent the timer from ending prematurely
        // console.timeEnd('promiss');

    }
    catch (error){
        // Log any errors that occur during the execution of the promises
        console.error('Warning', error);
    }
}

// Call the main function
main();