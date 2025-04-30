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

export const validateUrlRequest = [
  check('url_full')
    .exists().withMessage('El campo "url_full" es requerido')
    .isString().withMessage('El campo "url_full" debe ser un string')
    .notEmpty().withMessage('El campo "url_full" no puede estar vacío'),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array({ onlyFirstError: true }) });
      return
    }
    next();
  }
];

export const validateUrlShortRequest = [
  check('url_short')
    .exists().withMessage('El campo "url_short" es requerido')
    .isString().withMessage('El campo "url_short" debe ser un string')
    .notEmpty().withMessage('El campo "url_short" no puede estar vacío'),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array({ onlyFirstError: true }) });
      return
    }
    next();
  }
];
