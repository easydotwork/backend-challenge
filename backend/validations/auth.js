const { body, validationResult } = require('express-validator')
const authValidationRules = () => {
  return [

    body('email').isEmail().isLength({ min: 3, max: 100 }),
    body('password').isString().isLength({ min: 10, max: 10 }),
  ]
}

const validate = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

  return res.status(422).json({
    errors: extractedErrors,
  })
}

module.exports = {
  authValidationRules,
  validate,
}
