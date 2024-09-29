import IProduct from "./IProduct";

export default interface IOrders {
    id: number,
    status: string,
    date: Date,
    products: IProduct[],
}