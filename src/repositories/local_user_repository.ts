import IUserRepository from "./i_user_repository";

export default class LocalUserRepository implements IUserRepository {

    usuarios: string[] = []

    async createUser(id: string): Promise<string> {
        this.usuarios.push(id)
        return 'Criou com id ' + id
    }

    async getUser(): Promise<string[]> {
        return this.usuarios
    }

}