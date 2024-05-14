// pega usuário
function getUser(callback) {
   setTimeout(function () {
        return callback (null, {
            id: 345,
            name: 'John',
            burn: new Date()    
            })
    }, 1000);
}

function getAddress(idUser, callback) {
    setTimeout(()=> {
        return callback (null, {
            street: 'coast hunter',
            region: 'west'
            })
        }, 2000);
}

function getPhone(idUser, callback) {
    setTimeout(() => {
    return callback (null, {
        ddd: '54',
        phone: '991030295'
        })
    }, 2000);
}

function resolvedUser(erro, user) {
    console.log('usuario' + user);
}

function resolvedPhone(error1, ) {
    console.log('phone' + phoneUser);
}

getUser(function resolvedUser(error, user) {
    //null || "" || 0 === false regra JS
    if(error) {
        console.error('Warning User!', error);
        return;
    }
    getPhone(user.id, function resolvedPhone(error1, phone) {
        if(error1) {
            console.error('Warning Phone!', error1)
            return;
        }
        getAddress(user.id, function resolvedAdress(error2, adress) {
            if(error2) {
                console.error('Warning Adress!', error2)
                return;
        }
        
        console.log(`
           Nome: ${user.name},
           Endereço: ${adress.street},
           Telefone: ${phone.phone}

        `)
        })
    })
});