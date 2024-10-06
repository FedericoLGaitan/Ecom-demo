import { useAuth } from "@/context/AuthContext";
import { getOrders } from "@/helpers/orders.helper";
import IOrders from "@/interfaces/IOrder";
import IProduct from "@/interfaces/IProduct";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function Orders() {
  const [orders, setOrders] = useState<IOrders[]>([]);
  const router = useRouter()
  const {userData} = useAuth()

  const fetchData = async () => {
    if (userData?.token) {
      const response = await getOrders(userData.token);
      console.log(response);
      setOrders(response);
    }
  };

   useEffect(() => {
    if(userData?.user.name) {
      userData?.user.name === undefined ? router.push("/login") : fetchData(); }
   }, [userData?.user]);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Your Orders</h2>
      <ul className="space-y-4">
        {orders.map((order, index) => (
          <li
            key={index}
            className="border border-gray-300 rounded-lg p-4 bg-gray-50 mb-4"
          >
            <div className="flex justify-between pb-4 border-b border-gray-200">
              <div>
                <h3 className="text-lg font-medium">
                  Date: {new Date(order.date).toLocaleDateString()}
                </h3>
                <p className="text-sm text-gray-500">Status: {order.status}</p>
              </div>
            </div>
            <ul className="mt-4 space-y-2">
              <h4 className="text-md font-semibold mb-2">Products:</h4>
              {order.products.map((product: IProduct) => (
                <li
                  key={product.id}
                  className="flex items-center bg-white p-3 rounded shadow"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded mr-4"
                  />
                  <div className="flex-1">
                    <h5 className="text-lg font-medium">{product.name}</h5>
                    <p className="text-sm text-gray-600">
                      Price: ${product.price}
                    </p>
                    <p className="text-sm text-gray-600">
                      Quantity: {product.quantity}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Orders;
