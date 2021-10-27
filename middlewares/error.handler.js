/**
 *
 * Los middlewares de tipo error se deben de definir
 * despues de haber creado el Router
 */

// Este error se muestra en console
const { ValidationError } = require('sequelize')

function logErrors(err, req, res, next){
  console.log('logError')
  console.error(err)
  next(err)
}

// Este error se muestra en la vista (cliente)
function errorHandler(err, req, res, next){
  res.status(500).json({
    error: err.message,
    stack: err.stack
  })
  // next()
}

function boomErrorHandler(err, req, res, next){
  if(err.isBoom){
    const { output } = err
    res.status(output.statusCode).json( output.payload.message )
  }
  next(err)
}

function ormErrorHandler(err, req, res, next){
  if(err instanceof ValidationError){
    res.status(409).json({
      statusCode: 409,
      message: err.name,
      errors: err.errors
    })
  }
  next(err)
}

module.exports = { logErrors, errorHandler, boomErrorHandler, ormErrorHandler }
