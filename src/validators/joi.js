let Joi

try {
	Joi = require('@hapi/joi')
} catch (error) {
	console.log('You need install Joi dependence')
}

module.exports.validationJoiSchema = (schema, body) => {
	const { error } = schema.validate(body)
	if (error) {		
		return { isValid: false, message: error.details[0].message }
	}
	return { isValid: true }
}