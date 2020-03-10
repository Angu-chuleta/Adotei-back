import { Router} from 'express'
import { userController} from '../controllers' 

const routes = Router()

routes.get('/users', userController.getUsers)

export default routes
