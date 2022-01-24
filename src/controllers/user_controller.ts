import IUserRepository from "../repositories/i_user_repository";
import { Request, Response } from 'express'

export default class UserController {
    constructor (private repository: IUserRepository) {}

    async criarUsuario(request: Request, response: Response): Promise<Response> {
        return response.send(await this.repository.createUser('555'))
    }

    async buscarUsuario(request: Request, response: Response): Promise<Response> {
        return response.send(await this.repository.getUser())
    }
}