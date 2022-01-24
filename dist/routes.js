"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
// assim da certo
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield userController.buscarUsuario(req, res);
}));
// assim da erro
router.post('/', userController.criarUsuario);
exports.default = router;
