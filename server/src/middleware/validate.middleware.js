import { validationResult } from 'express-validator';

/**
 * Higher-order middleware to run express-validator rules and format 400 error responses.
 */
export const validate = (validations) => {
  return async (req, res, next) => {
    // Run all validations sequentially
    for (const validation of validations) {
      const result = await validation.run(req);
      if (result.errors.length) break;
    }

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array().map((err) => ({
        field: err.path || err.param,
        message: err.msg,
        value: err.value,
      })),
    });
  };
};

export default validate;
