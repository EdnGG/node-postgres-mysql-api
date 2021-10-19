/**
 *
 * Los middlewares de tipo error se deben de definir
 * despues de haber creado el Router
 */

// Este error se muestra en console
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

module.exports = { logErrors, errorHandler, boomErrorHandler }
