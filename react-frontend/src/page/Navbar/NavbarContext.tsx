import React from 'react'

export const NavbarContext = React.createContext<NavbarContextTypes>({
   isShopDropOpen: false,
   isUserDropOpen: false,
   isNavbarOpen: false,
   setIsShopDropOpen: () => null,
   setIsUserDropOpen: () => null,
   setIsNavbarOpen: () => null
})

export type NavbarContextTypes = {
   isShopDropOpen: boolean
   isUserDropOpen: boolean
   isNavbarOpen: boolean
   setIsShopDropOpen: React.Dispatch<React.SetStateAction<boolean>>
   setIsUserDropOpen: React.Dispatch<React.SetStateAction<boolean>>
   setIsNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>
}
