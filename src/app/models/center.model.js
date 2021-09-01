import Joi from 'joi'

const centerSchema = Joi.object({
  img: Joi.string()
    .uri()
    .trim()
    .required()
    .messages({
      'string.base': 'La url debe ser texto',
      'string.empty': 'La url no puede estar vacia',
      'string.min': 'La url debe tener un minimo de 5 caracteres',
      'string.max': 'La url debe tener un maximo de 30 caracteres',
      'any.required': 'La url es un campo requrido',
    }),
  coordenades: Joi.object({
    lat: Joi.number()
      .required()
      .messages({
        'number.base': 'Latitud debe ser un numero',
        'number.empty': 'Latitud no puede estar vacio',
        'any.required': 'Latitud es un campo requrido',
      }),
    lon: Joi.number()
      .required()
      .messages({
        'number.base': 'Longitud debe ser un numero',
        'number.empty': 'Longitud no puede estar vacio',
        'any.required': 'Longitud es un campo requrido',
      }),
  }).required(),
  adress: Joi.string()
    .trim()
    .required()
    .min(5)
    .max(50)
    .messages({
      'string.base': 'Direccion debe ser texto',
      'string.empty': 'Direccion no puede estar vacio',
      'string.min': 'Direccion debe tener un minimo de 5 caracteres',
      'string.max': 'Direccion debe tener un maximo de 50 caracteres',
      'any.required': 'Direccion es un campo requrido',
    }),
  name: Joi.string()
    .trim()
    .required()
    .min(5)
    .max(30)
    .messages({
      'string.base': 'Nombre debe ser texto',
      'string.empty': 'Nombre no puede estar vacio',
      'string.min': 'Nombre debe tener un minimo de 5 caracteres',
      'string.max': 'Nombre debe tener un maximo de 30 caracteres',
      'any.required': 'Nombre es un campo requrido',
    }),
})

export default centerSchema
