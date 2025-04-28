import { Request, Response , NextFunction} from "express";
import { dataSim , ErrorP} from "../types/env.d.js";

//Aqui deben de llegar las resquest de los usuarios
export const pagina = (_req: Request, res: Response) => {
  res.sendFile(process.cwd() + "/pages/index.html");
};

export const data_request = (req: Request<{}, {}, dataSim>, res: Response, next:NextFunction) => {
  try {
    const { data } = req.body;
    if(data === ''){
        throw new ErrorP('Dato invalido esta vacio',400)
    }
    console.log(data);
    res.send("Llego");
  } catch (error) {
    next(error)
  }
};
