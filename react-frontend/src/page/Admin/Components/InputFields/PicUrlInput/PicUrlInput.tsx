import React, { ChangeEvent } from 'react'
import { produce } from '@reduxjs/toolkit/node_modules/immer'
import { InputContainer, InputFieldStyle, StyledLabel } from '../InputStyle'
import { PictureUrlType } from '../../../Vga/VgaInsert'

const PicUrlInput: React.FC<Props> = ({ setPictureUrls, pictureUrls }) => {
   return (
      <InputContainer>
         {/* <StyledLabel>Kép Url-ek</StyledLabel> */}
         {/* https://github.com/benawad/react-form-arrays/blob/0_initial/src/App.tsx */}
         {pictureUrls.map((picture, index) => (
            <InputFieldStyle
               key={picture.id}
               onChange={(event) => {
                  const pictureUrl = event.target.value
                  setPictureUrls((currentPicture: PictureUrlType) => {
                     produce((currentPicture, value) => {
                        value[index].pictureUrl = pictureUrl
                     })
                  })
               }}
               type='text'
               placeholder='Kép url'
               value={picture.pictureUrl}
            />
         ))}
      </InputContainer>
   )
}

type Props = {
   setPictureUrls: (currentPicture: any) => void
   pictureUrls: PictureUrlType[]
}

export default PicUrlInput
