module.exports.generateConfirmationCode = () => (Math.floor(100000 + (Math.random() * 900000)))
module.exports.getCnpjFromKeyAccess = (keyAccess) => (keyAccess.substring(6, 20))
