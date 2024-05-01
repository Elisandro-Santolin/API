// console.log('Hello node!')

// pega usuário e endereço
function getUser(callback){
   setTimeout(function (){
        return callback (null, {
            id: 345,
            name: 'John',
            burn: new Date()    
            })
    }, 2000)
 }

function getAddress(idUser){
    setTimeout(()=> {

    }) 
}

function getPhone(idUser){
    setTimeout()
    return {
        ddd: '54',
        phone: '1134454534'
    }, 1000
}

const user = getUser;
const address = getAddress;
const phone = getPhone;



// ##  setTimeout(function (null, 
//     return {
//         name: 'John',
//         age: 20
//     }, 1000}