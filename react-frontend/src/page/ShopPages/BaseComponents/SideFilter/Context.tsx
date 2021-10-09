import { createContext } from 'react'
import { FilterTypes } from '../../BaseTypes'

export const SideFilterContext = createContext<ContextType>({
   setFilterOptions: () => {},
   filterOptions: {
      orderBy: '',
      minPrice: 0,
      maxPrice: 0,
      selectedPrice: [],
      allManufacturer: [],
      selectedManufacturer: 'all'
   }
})

type ContextType = {
   setFilterOptions: React.Dispatch<React.SetStateAction<any>>
   filterOptions: FilterTypes
}
