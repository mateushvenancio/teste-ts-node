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
Object.defineProperty(exports, "__esModule", { value: true });
class LocalUserRepository {
    constructor() {
        this.usuarios = [];
        this.createUser = this.createUser.bind(this);
        this.getUser = this.getUser.bind(this);
    }
    createUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.usuarios.push(id);
            return 'Criou com id ' + id;
        });
    }
    getUser() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.usuarios;
        });
    }
}
exports.default = LocalUserRepository;
