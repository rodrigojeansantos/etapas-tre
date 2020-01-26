module.exports.generateConfirmationCode = () => {
    const obj = {
        numeroPequeno: 1,
        numeroGrande: Math.floor(100000 + (Math.random() * 900000))
    }
    
    return obj
}

module.exports.getCnpjFromKeyAccess = (keyAccess) => (keyAccess.substring(6, 20))


module.exports.status = (code, form) => {
    const obj = {
        statusCode: code,        
        body: JSON.stringify({ form }) 
        //body: JSON.stringify({ message: 'Envie os campos corretos'})
    }

    return obj
}


/*
module.exports.status = (code, message) => {
    const obj = {
        statusCode: code,
        body: JSON.stringify({ message: message})
    }
    return obj 
}
*/