
export default interface IProduct {
    id:number;
    name: string;
    price: number;
    description: string;
    image: string;
    categoryId: number;
    stock: number;
}


export default interface IProductCart {
    id:number;
    name: string;
    price: number;
    description: string;
    image: string;
    categoryId: number;
    stock: number;
    quantity: number;
}

