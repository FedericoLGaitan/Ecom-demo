import IProduct from "@/interfaces/IProduct";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

export const getProductsDB = async (): Promise<IProduct[]> => {
  try {
    const response = await fetch(`${APIURL}/products`, {
     cache: 'no-cache'
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


export const getProductsByCategory = async (id: string) => {
  try {
    const response = await getProductsDB();
    const productsByCategory = response.filter((product) => product.categoryId.toString() === id)
    if(productsByCategory.length === 0) throw new Error("No products finded in this category");
    return productsByCategory
  } catch (error: any) {
    throw new Error(error)
  }
}