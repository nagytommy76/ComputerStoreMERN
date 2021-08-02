import React, { ChangeEvent } from 'react'
import { InputContainer, InputFieldStyle } from '../InputStyle'
import { PictureUrlType } from '../../../Vga/Insert/VgaInsert'
import { InputFieldContainer, RemoveLinkButtonStyle, InsertNewLinkButton } from './PicStyle'

const PicUrlInput: React.FC<Props> = ({ setPictureUrls, pictureUrls }) => {
   const setNewElementToPicUrlState = (event: ChangeEvent<HTMLInputElement>, currentIteratePicture: PictureUrlType) => {
      const pictureUrl = event.target.value
      setPictureUrls((currentPicture: PictureUrlType[]) => {
         return currentPicture.map((pic) =>
            pic.id === currentIteratePicture.id
               ? {
                    ...pic,
                    pictureUrl
                 }
               : pic
         )
      })
   }
   const createNewInputFieldAndStateItem = () => {
      setPictureUrls((currentPicUrls: PictureUrlType[]) => [
         ...currentPicUrls,
         {
            id: Date.now().toString(),
            pictureUrl: ''
         }
      ])
   }
   const removeLinkItem = (pictureId: string) => {
      setPictureUrls((currentPicUrls: PictureUrlType[]) => currentPicUrls.filter((x) => x.id !== pictureId))
   }
   return (
      <InputContainer>
         {/* https://github.com/benawad/react-form-arrays/blob/0_initial/src/App.tsx */}
         <InsertNewLinkButton type='button' onClick={() => createNewInputFieldAndStateItem()}>
            Új link
         </InsertNewLinkButton>
         {
            /*pictureUrls !== undefined &&*/
            pictureUrls.map((picture) => (
               <InputFieldContainer key={picture.id}>
                  <InputFieldStyle
                     onChange={(event) => setNewElementToPicUrlState(event, picture)}
                     type='text'
                     placeholder='Kép url'
                     value={picture.pictureUrl}
                  />
                  <RemoveLinkButtonStyle onClick={() => removeLinkItem(picture.id)} type='button'>
                     X
                  </RemoveLinkButtonStyle>
               </InputFieldContainer>
            ))
         }
      </InputContainer>
   )
}

type Props = {
   setPictureUrls: (currentPicture: any) => void
   pictureUrls: PictureUrlType[]
}

export default PicUrlInput
