import React from 'react'
import { cn } from '@/lib/utils'

export  interface IconButtonProps {
    onClick: () => void ,
    icon: React.ReactElement,
    className?: ""
}

const IconButton = (props: IconButtonProps) => {
  const {onClick, icon, className} = props
  return (
    <button onClick={onClick} 
    className={cn("rounded-full flex items-center p-1 bg-slate-50 border shadow-md hover:scale-125 transition ", className)}>
       {icon}
    </button>
  )
}

export default IconButton