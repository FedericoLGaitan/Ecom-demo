import { ILoginProps } from "@/interfaces/ILoginProps";
import { IRegisterProps } from "@/interfaces/IRegisterProps";
import Swal from "sweetalert2";


const APIURL = process.env.NEXT_PUBLIC_API_URL;

export const register = async (dataUser: IRegisterProps) => {
   try {
      await fetch(`${APIURL}/users/register`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(dataUser)
     })
   } catch (error: any) {
    throw new Error(error)
   }
}


export const login = async (dataUser: ILoginProps) => {
    try {
      const response =  await fetch(`${APIURL}/users/login`, {
         method: "POST",
         headers: {
             "Content-type": "application/json"
         },
         body: JSON.stringify(dataUser)
      })
       const res = await response.json()
      if (response.status === 400) { 
        Swal.fire({
            title: res.message,
            icon: "error",
            customClass: {
              popup: 'bg-white shadow-lg rounded-lg p-6',
              title: 'text-2xl font-semibold text-gray-800',
              confirmButton: 'bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded',
            },
            buttonsStyling: false, // Necesario para desactivar los estilos por defecto de los botones
          })
          throw new Error(res.message)
      } else { return res }
    } catch (error: any) {
        throw new Error(error)
    }  
 }