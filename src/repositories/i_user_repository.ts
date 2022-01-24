export default interface IUserRepository {
    getUser(): Promise<string[]>
    createUser(id: string): Promise<string>
}