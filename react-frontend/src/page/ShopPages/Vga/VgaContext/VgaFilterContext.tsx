import React from 'react'

export const VgaFilterContext = React.createContext(
   /*<FilterContextTypes>*/ {
      orderBy: 'asc',
      setOrderBy: () => {},
      minPrice: 0,
      setMinPrice: () => {},
      maxPrice: 0,
      setMaxPrice: (state: number) => {},
      selectedPrice: 0,
      setSelectedPrice: () => {}
   }
)

/*type FilterContextTypes = {
   orderBy: string
   setOrderBy: React.Dispatch<React.SetStateAction<string>>
   minPrice: number
   setMinPrice: React.Dispatch<React.SetStateAction<number>>
   maxPrice: number
   setMaxPrice: React.Dispatch<React.SetStateAction<number>>
   selectedPrice: number
   setSelectedPrice: React.Dispatch<React.SetStateAction<number>>
}*/
