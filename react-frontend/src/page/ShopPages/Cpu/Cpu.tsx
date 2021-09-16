import React, { useState, useEffect } from 'react'
import useFilter from '../Hooks/UseFilter'
import axios from 'axios'
import Container from '../../../SuspenseComponents/ProductCard/Container'
import { CardGridContainer, PageContainer, RightFlexContainer } from '../BaseStyleForShopPage'
import { CpuProductType } from './CpuTypes'
import { ProductContext } from '../Context/ShopContext'

const SideFilter = React.lazy(() => import('../BaseComponents/SideFilter/SideFilter'))
const ProductCard = React.lazy(() => import('../BaseComponents/ProductCard/ProductCard'))

const Cpu = () => {
   const [cpuProducts, setCpuProducts] = useState<CpuProductType[]>([])
   const { filterOptions, setFilterOptions } = useFilter('cpu')
   useEffect(() => {
      axios
         .get('/cpu')
         .then((allCpu) => {
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
                           pathNameForDetailsURL='cpu'
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
