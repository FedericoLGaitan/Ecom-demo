"use client"


import IUserSession from '@/interfaces/IUserSession'
import React, { useState ,createContext, useContext, useEffect }from 'react'


export interface UserContextProps {
  userData: IUserSession | null;
  setUserData: (userData:IUserSession | null ) => void;
}

export const UserContext = createContext<UserContextProps>({
  userData: null, 
  setUserData: () => {}, 
})

export interface AuthProviderProps {
  children: React.ReactNode 
}




export const UserProvider: React.FC<AuthProviderProps> = ({children}) => {
  
  const [userData, setUserData] = useState<IUserSession | null>(null);


  useEffect(() => {
    if (userData) {
      localStorage.setItem("userSession", JSON.stringify({token: userData.token, user: userData.user}))
    }
  }, [userData]);

  useEffect(() => {
    if (typeof window != "undefined" && window.localStorage) {
      const userData = JSON.parse(localStorage.getItem("userSession")!);
      setUserData(userData);
    }
  }, []);
   

  return (
    <UserContext.Provider value={{setUserData, userData}}>{children}</UserContext.Provider>
  )
}

export const useAuth = () => useContext(UserContext)