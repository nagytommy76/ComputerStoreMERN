import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Container from '../../../SuspenseComponents/ProductCard/Container'
import { CardGridContainer, PageContainer, RightFlexContainer } from '../BaseStyleForShopPage'
import { FilterTypes } from '../Vga/Vga'
import { CpuProductType } from './CpuTypes'
import { ProductContext } from '../Context/ShopContext'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'

const SideFilter = React.lazy(() => import('../BaseComponents/SideFilter/SideFilter'))
const ProductCard = React.lazy(() => import('../BaseComponents/ProductCard/ProductCard'))

const Cpu = () => {
   const [filterOptions, setFilterOptions] = useState<FilterTypes>({
      allManufacturer: [],
      selectedManufacturer: '',
      maxPrice: 200,
      minPrice: 0,
      orderBy: 'asc',
      selectedPrice: 0
   })
   const [cpuProducts, setCpuProducts] = useState<CpuProductType[]>([])
   const currentPage = useAppSelector((state) => state.paginate.currentPage)
   const perPage = useAppSelector((state) => state.paginate.perPage)

   useEffect(() => {
      axios.get('cpu/filter-data').then((filter) => {
         setFilterOptions({
            ...filterOptions,
            maxPrice: filter.data.maxPrice,
            minPrice: filter.data.minPrice,
            allManufacturer: filter.data.allManufacturers,
            selectedPrice: filter.data.minPrice
         })
      })
   }, [currentPage, perPage, filterOptions.orderBy, filterOptions.selectedManufacturer])
   useEffect(() => {
      axios
         .get('/cpu')
         .then((allCpu) => {
            console.log(allCpu.data)
            setCpuProducts(allCpu.data.allProducts)
         })
         .catch((error) => console.log(error))
      // eslint-disable-next-line
   }, [])
   return (
      <React.Suspense fallback={<Container />}>
         <PageContainer>
            <SideFilter filterOptions={filterOptions} setFilterOptions={setFilterOptions} />
            <RightFlexContainer>
               <CardGridContainer>
                  {cpuProducts.map((cpu) => (
                     <ProductContext.Provider
                        key={cpu._id}
                        value={{
                           _id: cpu._id,
                           productName: `${cpu.manufacturer} ${cpu.type} ${cpu.typeCode}`,
                           price: cpu.price,
                           displayImage: cpu.pictureUrls[0]
                        }}>
                        <ProductCard
                           key={cpu._id}
                           _id={cpu._id}
                           details={cpu.details}
                           itemNumber={cpu.itemNumber}
                           manufacturer={cpu.manufacturer}
                           pictureUrls={cpu.pictureUrls}
                           price={cpu.price}
                           type={cpu.type}
                           typeCode={cpu.typeCode}
                        />
                     </ProductContext.Provider>
                  ))}
               </CardGridContainer>
            </RightFlexContainer>
         </PageContainer>
      </React.Suspense>
   )
}

export default Cpu
