"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("./controllers/user_controller"));
const local_user_repository_1 = __importDefault(require("./repositories/local_user_repository"));
const router = (0, express_1.Router)();
const userRepository = new local_user_repository_1.default();
const userController = new user_controller_1.default(userRepository);
router.get('/', userController.buscarUsuario);
router.post('/', userController.criarUsuario);
exports.default = router;
