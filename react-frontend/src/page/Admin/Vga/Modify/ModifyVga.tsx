import axios, { AxiosError, AxiosResponse } from 'axios'
import React, { useState, useEffect } from 'react'
import { VgaType } from '../../../ShopPages/Vga/VgaTypes'
import { StyledForm, FullWidhtContainerStyle } from '../../Components/Form/FormStyle'
import SubmitButton from '../../Components/InputFields/SubmitButton/SubmitButton'
import BaseInputFields from '../BaseInput/BaseInputFields'
import ProductSelector from '../../Components/InputFields/ProductSelector/ProductSelector'
import { vgaProperties } from '../VgaProperties'
import TextArea from '../../Components/InputFields/TextArea/TextArea'
import PicUrlInput from '../../Components/InputFields/PicUrlInput/PicUrlInput'
import { PictureUrlType } from '../Insert/VgaInsert'

const ModifyVga = () => {
   const [selectedProductPictureUrls, setSelectedProductPictureUrls] = useState<PictureUrlType[]>([])
   const [allVgaProducts, setAllVgaProducts] = useState<VgaType[]>([])
   const [productDetails, setProductDetails] = useState<VgaType>(vgaProperties)
   const fetchAllVga = async () => {
      await axios
         .get('admin/vga/get-all')
         .then((response: AxiosResponse) => {
            setAllVgaProducts(response.data)
         })
         .catch((error: AxiosError) => console.log(error))
   }
   useEffect(() => {
      fetchAllVga()
   }, [])
   return (
      <StyledForm>
         <FullWidhtContainerStyle>
            <ProductSelector
               products={allVgaProducts}
               setDetailedProducts={setProductDetails}
               setPictureUrls={setSelectedProductPictureUrls}
            />
         </FullWidhtContainerStyle>
         <BaseInputFields vgaProduct={productDetails} setVgaProduct={setProductDetails} />
         <FullWidhtContainerStyle>
            <TextArea
               labelText='Leírás'
               value={productDetails.details.description}
               onChangeEvent={(event) =>
                  setProductDetails({
                     ...productDetails,
                     details: { ...productDetails.details, description: event.target.value }
                  })
               }
            />
         </FullWidhtContainerStyle>
         <FullWidhtContainerStyle>
            <PicUrlInput setPictureUrls={setSelectedProductPictureUrls} pictureUrls={selectedProductPictureUrls} />
         </FullWidhtContainerStyle>
         <FullWidhtContainerStyle>
            <SubmitButton>Módosítás</SubmitButton>
         </FullWidhtContainerStyle>
      </StyledForm>
   )
}

export default ModifyVga
