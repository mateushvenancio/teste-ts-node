import { Router } from "express";
import UserController from "./controllers/user_controller";
import IUserRepository from "./repositories/i_user_repository";
import LocalUserRepository from "./repositories/local_user_repository";

const router = Router()

const userRepository: IUserRepository = new LocalUserRepository()
const userController: UserController = new UserController(userRepository)

// assim da certo
router.get('/', async (req, res) => {
    return await userController.buscarUsuario(req, res);
})

// assim da erro
router.post('/', userController.criarUsuario)

export default router