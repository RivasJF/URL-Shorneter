import { Request, Response , NextFunction} from "express";
import { ErrorP, testPing, URL_request} from "../types/env.d.js";
import { create_Url, ping, shortener } from "../services/index.services.js";

//Aqui deben de llegar las resquest de los usuarios
export const pagina = (_req: Request, res: Response) => {
  res.sendFile(process.cwd() + "/pages/index.html");
};

export const data_URL_request =  async (req: Request<{}, {}, URL_request>, res: Response, next:NextFunction)=>{
  try {
    const { url_full } = req.body;
    const response_db = await create_Url(url_full)
    res.json(response_db);
  } catch (error) {
    next(error)
  }
} 

export const test_BD = async(_req: Request, res: Response) => {
  const response = await ping()
  res.json(response);
};