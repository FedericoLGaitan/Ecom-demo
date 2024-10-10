

const APIURL = process.env.NEXT_PUBLIC_API_URL;

export const createOrder = async (products: number[], token: string) => {
  try {
    const res = await fetch(`${APIURL}/orders`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({ products }),
    });
    
    const orders = res.json();
    return orders;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getOrders = async ( token: string) => {
  try {
    const res = await fetch(`${APIURL}/users/orders`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        authorization: token,
      },
    });
    
    const orders = res.json();
    return orders;
  } catch (error: any) {
    throw new Error(error);
  }
};
