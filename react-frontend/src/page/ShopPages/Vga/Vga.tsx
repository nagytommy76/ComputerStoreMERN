import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CardGridContainer, PageContainer } from '../BaseStyleForShopPage'
import { VgaType } from './VgaTypes'

const ProductCard = React.lazy(() => import('../BaseComponents/ProductCard/ProductCard'))

const Vga = () => {
   const [vgaProducts, setVgaProducts] = useState<null | VgaType[]>(null)
   useEffect(() => {
      axios.get(`/vga`).then((vgas) => setVgaProducts(vgas.data))
   }, [])
   return (
      <PageContainer>
         <CardGridContainer>
            {vgaProducts &&
               vgaProducts.map((product) => (
                  <ProductCard
                     key={product._id}
                     itemNumber={product.itemNumber}
                     manufacturer={product.manufacturer}
                     pictureUrls={product.pictureUrls}
                     price={product.price}
                     type={product.type}
                     typeCode={product.typeCode}
                     details={product.details}
                  />
               ))}
         </CardGridContainer>
      </PageContainer>
   )
}

export default Vga
