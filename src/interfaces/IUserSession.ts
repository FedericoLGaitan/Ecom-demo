export default interface IUserSession {
    token: string,
    user: {
        address: string,
        email: string,
        id: number;
        name:string;
        phone: number;
        role: string
        orders: []
    }
}