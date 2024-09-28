export default interface IUserSession {
    token: string,
    user: {
        adress: string,
        email: string,
        id: number;
        name:string;
        phone: number;
        role: string
        orders: []
    }
}