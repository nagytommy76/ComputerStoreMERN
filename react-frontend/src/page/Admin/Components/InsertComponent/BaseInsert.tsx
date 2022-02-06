import React, { lazy, useState } from 'react'
import { ValidationError } from '../../AdminTypes'
import { PictureUrlType } from '../../Vga/Types'

const DescriptionTextArea = lazy(() => import('../InputFields/TextArea/DescriptionTextArea'))
const PicUrlInput = lazy(() => import('../InputFields/PicUrlInput/PicUrlInput'))
const BaseInsertForm = lazy(() => import('../Form/BaseInsertForm'))

const BaseInsert: React.FC<{
   title: string
   productType: string
   productProperties: any
   product: any
   setProducts: React.Dispatch<any>
   setValidationErrors: React.Dispatch<React.SetStateAction<ValidationError[]>>
}> = ({ children, title, productType, productProperties, product, setProducts, setValidationErrors }) => {
   const [pictureUrls, setPictureUrls] = useState<PictureUrlType[]>([])
   return (
      <BaseInsertForm
         productType={productType}
         pictureUrls={pictureUrls}
         setPictureUrls={setPictureUrls}
         product={product}
         productBaseProperties={productProperties}
         setProduct={setProducts}
         setValidationErrors={setValidationErrors}
         mainTitle={`${title} bevitele`}
         submitButtonText='Bevitel'
      >
         {children}
         <DescriptionTextArea
            labelText='Leírás'
            onChangeEvent={event => setProducts({ ...product, details: { ...product.details, description: event.target.value } })}
            value={product.details.description}
         />
         <PicUrlInput setPictureUrls={setPictureUrls} pictureUrls={pictureUrls}></PicUrlInput>
      </BaseInsertForm>
   )
}

export default BaseInsert
