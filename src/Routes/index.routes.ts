import { Router } from "express";
import { data_URL_request, pagina, redirect_URL_request, test_BD } from "../controllers/index.controller.js";
import { validateDataRequest, validateUrlRequest, validateUrlShortRequest } from "../middleware/validation.js";

const routes = Router()

routes.get('/', pagina)

routes.post('/create-URL',validateUrlRequest,data_URL_request)
routes.get('/input/:url_short',validateUrlShortRequest,redirect_URL_request)

routes.get('/ping',test_BD)


export default routes;