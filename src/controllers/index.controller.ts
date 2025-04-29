import { Request, Response , NextFunction} from "express";
import { dataSim , ErrorP, testPing, URL_request} from "../types/env.d.js";
import { ping, shortener } from "../services/index.services.js";

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

export const data_URL_request =  (req: Request<{}, {}, URL_request>, res: Response, next:NextFunction)=>{
  try {
    const { url_full } = req.body;
    const resp = shortener(url_full)
    console.log(resp);
    res.json({
      "Url_full":url_full,
      "Url_short":resp,
    });
  } catch (error) {
    
  }
} 

export const test_BD = async(_req: Request, res: Response) => {
  const [response] = await ping()
  res.json(response);
};