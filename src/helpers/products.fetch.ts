import IProduct from "@/interfaces/IProduct";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

export const getProductsDB = async (): Promise<IProduct[]> => {
  try {
    const response = await fetch(`${APIURL}/products`, {
      next: {revalidate: 1200}
    });
    const products: IProduct[] = await response.json();
    return products;
  } catch (error: any) {
    throw new Error(error)
  }
};
 
export const getProductsByIdDB = async (id: string) => {
  try {
    const response = await getProductsDB()
    const product =  response.find(product => product.id.toString() === id)
    if(!product) throw new Error("Product not found")
      return product
  } catch (error: any) {
    throw new Error(error);
  }
} 


