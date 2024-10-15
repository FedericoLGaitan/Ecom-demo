import Footer from "@/components/Footer/Footer"
import NavBar from "@/components/NavBar/NavBar"
import "./global.css"
import { UserProvider } from "@/context/AuthContext"

export const metadata = {
  title: 'Ecommerce-demo',
  description: 'Welcome to my demo-eccomerce',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col flex-nowrap justify-between w-screen h-screen bg-[#FBFBFB]">
        <UserProvider>
        <NavBar/>
        {children}
        <Footer/>
        </UserProvider>
        </body>
    </html>
  )
}
