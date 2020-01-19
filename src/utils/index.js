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
        status: code,        
        body: JSON.stringify(form)
    }

    return obj
}