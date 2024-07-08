import Joi from 'joi'

const postValidator = Joi.object({
  title: Joi.string().min(3).max(15).required().messages({
    'string.min': 'Title must be at least 3 characters long',
    'string.max': 'Title must be at most 15 characters long',
    'string.empty': 'Title cannot be empty',
  }),
  body: Joi.string().min(5).max(100).required().messages({
    'string.min': 'Body must be at least 5 characters long',
    'string.max': 'Body must be at most 100 characters long',
    'string.empty': 'Body cannot be empty',
  }),
  userId: Joi.number().integer().min(1).max(100).required().messages({
    'number.min': 'User ID must be at least 1',
    'number.max': 'User ID must be at most 10',
  }),
})

export default postValidator
