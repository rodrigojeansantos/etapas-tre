module.exports.generateConfirmationCode = () => {
    const obj = {
        numeroPequeno: 1,
        numeroGrande: Math.floor(100000 + (Math.random() * 900000))
    }
    
    return obj
}

module.exports.getCnpjFromKeyAccess = (keyAccess) => (keyAccess.substring(6, 20))


// module.exports.status = (code, form) => {
//     console.log("dentro do utils antes da const", code)
//     const obj = {
//         status: code,        
//         body: JSON.stringify(form)
//     } 

//     console.log("dentro do utils depos da const", code)
//     return obj 
// }

module.exports.status = (code, message) => {
    const obj = {
        statusCode: code,
        body: JSON.stringify(message)
    }
    return obj 
}
