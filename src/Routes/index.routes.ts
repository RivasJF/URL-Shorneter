import { Router } from "express";
import { data_URL_request, pagina, test_BD } from "../controllers/index.controller.js";
import { validateDataRequest, validateUrlRequest } from "../middleware/validation.js";

const routes = Router()

routes.get('/', pagina)
routes.post('/create-URL',validateUrlRequest,data_URL_request)
routes.get('/ping',test_BD)

export default routes;