import { Router } from "express";
import { data_request, pagina } from "../controllers/index.controller.js";
import { validateDataRequest } from "../middleware/validation.js";

const routes = Router()

routes.get('/', pagina)
routes.post('/api', validateDataRequest,  data_request)

export default routes;