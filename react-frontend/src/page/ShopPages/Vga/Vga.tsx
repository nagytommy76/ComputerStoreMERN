import axios from 'axios'
import React, { useEffect, useState, Suspense } from 'react'
import { CardGridContainer, PageContainer } from '../BaseStyleForShopPage'
import { VgaType } from './VgaTypes'
import { VgaContext } from './VgaContext/VgaContext'
import Container from '../../../SuspenseComponents/ProductCard/Container'

const ProductCard = React.lazy(() => import('../BaseComponents/ProductCard/ProductCard'))

const Vga = () => {
   const [vgaProducts, setVgaProducts] = useState<VgaType[]>([])
   useEffect(() => {
      axios
         .get(`/vga`)
         .then((vgas) => setVgaProducts(vgas.data))
         .catch((error) => console.log(error))
   }, [])
   return (
      <Suspense fallback={<Container />}>
         <PageContainer>
            <CardGridContainer>
               {vgaProducts.map((product) => (
                  <VgaContext.Provider
                     key={product._id}
                     value={{
                        _id: product._id,
                        productName: `${product.manufacturer} ${product.type} ${product.typeCode}`,
                        price: product.price,
                        displayImage: product.pictureUrls[0]
                     }}>
                     <ProductCard
                        key={product._id}
                        _id={product._id}
                        itemNumber={product.itemNumber}
                        manufacturer={product.manufacturer}
                        pictureUrls={product.pictureUrls}
                        price={product.price}
                        type={product.type}
                        typeCode={product.typeCode}
                        details={product.details}
                     />
                  </VgaContext.Provider>
               ))}
            </CardGridContainer>
         </PageContainer>
      </Suspense>
   )
}

export default Vga
