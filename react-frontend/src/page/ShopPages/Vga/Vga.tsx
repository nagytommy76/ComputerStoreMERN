import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CardGridContainer, PageContainer } from '../BaseStyleForShopPage'
import { VgaType } from './VgaTypes'
import { VgaContext } from './VgaContext/VgaContext'

const ProductCard = React.lazy(() => import('../BaseComponents/ProductCard/ProductCard'))

const Vga = () => {
   const [vgaProducts, setVgaProducts] = useState<null | VgaType[]>(null)
   useEffect(() => {
      axios
         .get(`/vga`)
         .then((vgas) => setVgaProducts(vgas.data))
         .catch((error) => console.log(error))
   }, [])
   return (
      <PageContainer>
         <CardGridContainer>
            {vgaProducts &&
               vgaProducts.map((product) => (
                  <VgaContext.Provider
                     key={product._id}
                     value={{
                        _id: product._id,
                        productName: `${product.manufacturer} ${product.type} ${product.typeCode}`,
                        price: product.price,
                        displayImage: product.pictureUrls[0]
                     }}>
                     <ProductCard
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
   )
}

export default Vga
