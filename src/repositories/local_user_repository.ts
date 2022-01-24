import IUserRepository from "./i_user_repository";

export default class LocalUserRepository implements IUserRepository {

    usuarios: string[] = []

    constructor () {
        this.createUser = this.createUser.bind(this)
        this.getUser = this.getUser.bind(this)
    }

    async createUser(id: string): Promise<string> {
        this.usuarios.push(id)
        return 'Criou com id ' + id
    }

    async getUser(): Promise<string[]> {
        return this.usuarios
    }

}