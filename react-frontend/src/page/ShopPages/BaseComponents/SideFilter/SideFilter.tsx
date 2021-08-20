import axios from 'axios'
import React, { useEffect } from 'react'
import NumberFormat from 'react-number-format'
import { useAppSelector } from '../../../../app/hooks'
import { StyledFilter, MainTitle, InputContainer, StyledLabel, StyledInput, StyledSelect } from './FilterStyle'

const SideFilter: React.FC<Props> = ({ minPrice, maxPrice, selectedPrice, setSelectedPrice, setOrderBy }) => {
   const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme)
   useEffect(() => {
      axios.get(`/vga/filter-data`).then((result) => {
         console.log(result)
      })
   }, [])
   return (
      <StyledFilter isDarkTheme={isDarkTheme}>
         <MainTitle>Szűrés</MainTitle>
         <InputContainer>
            <StyledLabel htmlFor='orderBy'>Rendezés</StyledLabel>
            <StyledSelect
               name='orderBy'
               id='orderBy'
               onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setOrderBy(event.target.value)}>
               <option value='asc'>Legolcsóbb elöl</option>
               <option value='desc'>Legdrágább elöl</option>
            </StyledSelect>
         </InputContainer>
         <InputContainer>
            <StyledLabel htmlFor='priceRange'>
               Ár: (<NumberFormat value={selectedPrice} thousandSeparator=' ' suffix=' Ft' displayType='text' />
               - <NumberFormat value={maxPrice} thousandSeparator=' ' suffix=' Ft' displayType='text' />)
            </StyledLabel>
            <StyledInput
               type='range'
               min={minPrice}
               max={maxPrice}
               step='100'
               /*onMouseUp={(event: any) => setSelectedPrice(parseInt(event.target.value))}*/
            />
         </InputContainer>
      </StyledFilter>
   )
}

type Props = {
   minPrice: number
   maxPrice: number
   setSelectedPrice: React.Dispatch<React.SetStateAction<number>>
   setOrderBy: React.Dispatch<React.SetStateAction<string>>
   selectedPrice: number
}

export default SideFilter
