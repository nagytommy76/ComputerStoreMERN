import React from 'react'

export const NavbarContext = React.createContext<Context>({
   isShopDropOpen: false,
   setIsShopDropOpen: () => null,
   isUserDropOpen: false,
   setIsUserDropOpen: () => null
})

type Context = {
   isShopDropOpen: boolean
   setIsShopDropOpen: React.Dispatch<React.SetStateAction<boolean>>
   //    setIsShopDropOpen: (value: boolean) => void
   isUserDropOpen: boolean
   setIsUserDropOpen: React.Dispatch<React.SetStateAction<boolean>>
}
