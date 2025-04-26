import { Router , Request , Response} from "express";

const routes = Router()

routes.get('/',(_req:Request,res:Response)=>{
    res.sendFile(process.cwd()+'/pages/index.html')
})

export default routes;