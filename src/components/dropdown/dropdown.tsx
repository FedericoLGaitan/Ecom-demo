
import { useRouter } from "next/navigation"

import {
    CircleUserRound,
    CreditCard,
    LogOut,
    User,
  } from "lucide-react"

  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  
  export function DropdownMenuUser() {
    
    const router = useRouter();
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <CircleUserRound  cursor="pointer" strokeWidth="1" size="32" /> 
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <button onClick={()=>{router.push("/dashboard")}}>Profile</button>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CreditCard className="mr-2 h-4 w-4" />
              <button>Billing</button>
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut> 
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            <button onClick={() => {localStorage.removeItem('userSession'); window.location.href = '/'}}>Log out</button>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
  