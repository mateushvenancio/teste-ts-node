import { Router } from "express";
import UserController from "./controllers/user_controller";
import LocalUserRepository from "./repositories/local_user_repository";

const router = Router()

const userRepository = new LocalUserRepository()
const userController = new UserController(userRepository)


router.get('/', userController.buscarUsuario)
router.post('/', userController.criarUsuario)

export default router