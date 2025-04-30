import { Request, Response, NextFunction } from 'express';

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  //console.error(err); // Para log interno

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Error interno del servidor';

  res.status(statusCode).json({
    error: {
      message,
    }
  });
};

export const url_discont= (req: Request, res: Response, next: NextFunction) => {
  //console.error(err); // Para log interno

  const statusCode = 404;


  res.status(statusCode).sendFile(process.cwd() + "/pages/404.html")

};
