import React, { ChangeEvent, useContext } from 'react'
import { AdminContext } from '../../../Context/AdminContext'
import { PictureUrlType } from '../../../Vga/Types'
import { InputFieldContainer, PicUrlContainer } from './PicStyle'

import RemoveIcon from './RemoveIcon'
import PictureLinkIcon from './LinkIcon'

import { TransitionGroup } from 'react-transition-group'
import Collapse from '@mui/material/Collapse'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

const PicUrlInput: React.FC = () => {
   const { selectedProductPictureUrls, setSelectedProductPictureUrls } = useContext(AdminContext)
   const setNewElementToPicUrlState = (
      event: ChangeEvent<HTMLInputElement>,
      currentIteratePicture: PictureUrlType
   ) => {
      const pictureUrl = event.target.value
      setSelectedProductPictureUrls((currentPicture: PictureUrlType[]) => {
         return currentPicture.map(pic =>
            pic.id === currentIteratePicture.id
               ? {
                    ...pic,
                    pictureUrl,
                 }
               : pic
         )
      })
   }
   const createNewInputFieldAndStateItem = () => {
      setSelectedProductPictureUrls((currentPicUrls: PictureUrlType[]) => [
         ...currentPicUrls,
         {
            id: Date.now().toString(),
            pictureUrl: '',
         },
      ])
   }
   const removeLinkItem = (pictureId: string) => {
      setSelectedProductPictureUrls((currentPicUrls: PictureUrlType[]) =>
         currentPicUrls.filter(x => x.id !== pictureId)
      )
   }
   return (
      <PicUrlContainer>
         <Button
            sx={{ width: '150px', margin: '1rem 0' }}
            variant='outlined'
            onClick={() => createNewInputFieldAndStateItem()}
         >
            Új link
         </Button>
         <TransitionGroup>
            {selectedProductPictureUrls.map(picture => (
               <Collapse key={picture.id} timeout={150}>
                  <InputFieldContainer>
                     <TextField
                        id='pictureUrl'
                        label='Kép url'
                        fullWidth
                        margin='dense'
                        size='small'
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                           setNewElementToPicUrlState(event, picture)
                        }
                        value={picture.pictureUrl}
                     />

                     <RemoveIcon title='Törlés' onClickEvent={() => removeLinkItem(picture.id)} />
                     <PictureLinkIcon pictureUrl={picture.pictureUrl} title='Ugrás a képhez' />
                  </InputFieldContainer>
               </Collapse>
            ))}
         </TransitionGroup>
      </PicUrlContainer>
   )
}

export default PicUrlInput
