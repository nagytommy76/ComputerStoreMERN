import { createContext } from 'react'

export const SideFilterContext = createContext<ContextType>({
   setFilterOptions: () => {},
   filterOptions: {
      selectedPrice: [],
      selectedManufacturer: 'all'
   }
})

type ContextType = {
   setFilterOptions: React.Dispatch<React.SetStateAction<any>>
   filterOptions: {
      selectedPrice: number[]
      selectedManufacturer: string
   }
}
