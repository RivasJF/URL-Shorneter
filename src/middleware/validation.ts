import { Request, Response, NextFunction } from 'express';
import { check, validationResult } from 'express-validator';

// Middleware que valida que data sea un string no vacío
export const validateDataRequest = [
  check('data')
    .exists().withMessage('El campo "data" es requerido')
    .isString().withMessage('El campo "data" debe ser un string')
    .notEmpty().withMessage('El campo "data" no puede estar vacío'),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array({ onlyFirstError: true }) });
      return
    }
    next();
  }
];
