import React from 'react'
import Container from '../../../SuspenseComponents/ProductCard/Container'
import { CardGridContainer, PageContainer, RightFlexContainer } from '../BaseStyleForShopPage'
// import { CpuProductType } from './CpuTypes'
import { ProductContext } from '../Context/ShopContext'
import { useAppSelector } from '../../../app/hooks'

const SideFilter = React.lazy(() => import('../BaseComponents/SideFilter/SideFilter'))
const ProductCard = React.lazy(() => import('../BaseComponents/ProductCard/ProductCard'))
const Pagination = React.lazy(() => import('../BaseComponents/Pagination/Pagination'))

const Cpu = () => {
   // const [cpuProducts, setCpuProducts] = useState<CpuProductType[]>([])
   const cpuProducts = useAppSelector((state) => state.products.products)

   return (
      <PageContainer>
         <React.Suspense fallback={<Container />}>
            <SideFilter productType='cpu' />
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
                           ratingCount={cpu.ratingValues?.length}
                        />
                     </ProductContext.Provider>
                  ))}
               </CardGridContainer>
               <Pagination />
            </RightFlexContainer>
         </React.Suspense>
      </PageContainer>
   )
}

export default Cpu
