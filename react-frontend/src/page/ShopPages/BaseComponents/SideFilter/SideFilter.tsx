import axios from 'axios'
import React, { useEffect } from 'react'
import NumberFormat from 'react-number-format'
import { useAppSelector } from '../../../../app/hooks'
import { FilterTypes } from '../../Vga/Vga'
import { StyledFilter, MainTitle, InputContainer, StyledLabel, StyledInput, StyledSelect } from './FilterStyle'

const SideFilter: React.FC<Props> = ({ filerOptions, setFilterOptions }) => {
   const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme)
   useEffect(() => {
      axios.get(`/vga/filter-data`).then((filterData) => {
         setFilterOptions({
            ...filerOptions,
            maxPrice: filterData.data.maxPrice,
            minPrice: filterData.data.minPrice,
            allManufacturer: filterData.data.allManufacturers,
            selectedPrice: filterData.data.minPrice
         })
      })
      // eslint-disable-next-line
   }, [])
   return (
      <StyledFilter isDarkTheme={isDarkTheme}>
         <MainTitle>Szűrés</MainTitle>
         <InputContainer>
            <StyledLabel htmlFor='orderBy'>Rendezés</StyledLabel>
            <StyledSelect
               name='orderBy'
               id='orderBy'
               onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                  setFilterOptions({ ...filerOptions, orderBy: event.target.value })
               }>
               <option value='asc'>Legolcsóbb elöl</option>
               <option value='desc'>Legdrágább elöl</option>
            </StyledSelect>
         </InputContainer>
         <InputContainer>
            <StyledLabel htmlFor='manufacturer'>Gyárók</StyledLabel>
            <StyledSelect
               name='manufacturer'
               id='manufacturer'
               onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                  setFilterOptions({ ...filerOptions, selectedManufacturer: event.target.value })
               }>
               <option value=''>Nincs kiválasztva</option>
               {filerOptions.allManufacturer.map((man, index) => (
                  <option key={index} value={man}>
                     {man}
                  </option>
               ))}
            </StyledSelect>
         </InputContainer>
         <InputContainer>
            <StyledLabel htmlFor='priceRange'>
               Ár: (<NumberFormat value={filerOptions.selectedPrice} thousandSeparator=' ' suffix=' Ft' displayType='text' />
               - <NumberFormat value={filerOptions.maxPrice} thousandSeparator=' ' suffix=' Ft' displayType='text' />)
            </StyledLabel>
            <StyledInput
               type='range'
               min={filerOptions.minPrice}
               max={filerOptions.maxPrice}
               step='100'
               onMouseUp={(event: any) => setFilterOptions({ ...filerOptions, selectedPrice: parseInt(event.target.value) })}
            />
         </InputContainer>
      </StyledFilter>
   )
}

type Props = {
   filerOptions: FilterTypes
   setFilterOptions: React.Dispatch<React.SetStateAction<FilterTypes>>
}

export default SideFilter
