/**
 * 404 Not Found Middleware
 */
export const notFound = (req, res, next) => {
  const error = new Error(`Resource not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

/**
 * Global Error Handling Middleware
 */
export const errorHandler = (err, req, res, next) => { // eslint-disable-line no-unused-vars
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message || 'Internal Server Error';

  // Handle Mongoose Bad ObjectId / CastError
  if (err.name === 'CastError' && err.kind === 'ObjectId') {
    statusCode = 404;
    message = 'Resource not found: Invalid ID format';
  }

  // Handle Mongoose Validation Error
  if (err.name === 'ValidationError') {
    statusCode = 400;
    message = Object.values(err.errors)
      .map((val) => val.message)
      .join(', ');
  }

  // Handle Mongoose Duplicate Key Error (Code 11000)
  if (err.code === 11000) {
    statusCode = 409;
    const duplicatedField = Object.keys(err.keyValue || {})[0] || 'field';
    message = `A record with this ${duplicatedField} already exists.`;
  }

  // Handle malformed JSON body
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    statusCode = 400;
    message = 'Malformed JSON in request body.';
  }

  // Log error in non-production
  if (process.env.NODE_ENV !== 'test') {
    console.error(`[Error Handler] ${req.method} ${req.url} - ${statusCode}: ${message}`);
    if (statusCode === 500 && process.env.NODE_ENV === 'development') {
      console.error(err.stack);
    }
  }

  res.status(statusCode).json({
    success: false,
    message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
  });
};

export default {
  notFound,
  errorHandler,
};
