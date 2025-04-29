import { Router } from "express";
import { data_request, data_URL_request, pagina } from "../controllers/index.controller.js";
import { validateDataRequest, validateUrlRequest } from "../middleware/validation.js";

const routes = Router()

routes.get('/', pagina)
routes.post('/api', validateDataRequest,  data_request)
routes.post('/create-URL',validateUrlRequest,data_URL_request)

export default routes;