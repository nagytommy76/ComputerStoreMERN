import React, { useState, lazy } from 'react'
import handleInsertSubmit from '../../Helper/HandleInsertSubmit'
import { FullWidhtContainerStyle } from '../../Components/Form/FormStyle'
import { VgaType } from '../../../ShopPages/Vga/VgaTypes'
import { vgaProperties } from '../VgaProperties'
import { PictureUrlType } from '../Types'
import { ValidationError } from '../../AdminTypes'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

const PicUrlInput = lazy(() => import('../../Components/InputFields/PicUrlInput/PicUrlInput'))
const DescriptionTextArea = lazy(() => import('../../Components/InputFields/TextArea/DescriptionTextArea'))
const SubmitButton = lazy(() => import('../../Components/InputFields/SubmitButton/SubmitButton'))
const BaseInputFields = lazy(() => import('../BaseInput/BaseInputFields'))

const AdminVga = () => {
   const [pictureUrls, setPictureUrls] = useState<PictureUrlType[]>([])
   const [vgaProduct, setVgaProduct] = useState<VgaType>(vgaProperties)
   const [validationErrors, setValidationErrors] = useState<ValidationError[]>([])

   const insertVga = async (event: React.FormEvent) => {
      event.preventDefault()
      handleInsertSubmit('vga', vgaProduct, pictureUrls, setValidationErrors, setVgaProduct, vgaProperties)
   }
   return (
      <Card sx={{ width: '55%', margin: '2rem 0' }}>
         <CardContent>
            <form onSubmit={insertVga}>
               <BaseInputFields setVgaProduct={setVgaProduct} vgaProduct={vgaProduct} validationErrors={validationErrors} />
               <FullWidhtContainerStyle>
                  <DescriptionTextArea
                     labelText='Leírás'
                     onChangeEvent={(event) =>
                        setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, description: event.target.value } })
                     }
                     value={vgaProduct.details.description}
                  />
               </FullWidhtContainerStyle>
               <FullWidhtContainerStyle>
                  <PicUrlInput setPictureUrls={setPictureUrls} pictureUrls={pictureUrls}></PicUrlInput>
               </FullWidhtContainerStyle>
               <FullWidhtContainerStyle>
                  <SubmitButton>Vga Bevitele</SubmitButton>
               </FullWidhtContainerStyle>
            </form>
         </CardContent>
      </Card>
   )
}

export default AdminVga
