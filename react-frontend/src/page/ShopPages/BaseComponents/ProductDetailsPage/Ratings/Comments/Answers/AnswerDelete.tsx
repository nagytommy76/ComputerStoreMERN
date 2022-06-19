import React, { useContext, useEffect, useState, useCallback } from 'react'
import { axiosInstance } from '../../../../../../../AxiosSetup/AxiosInstance'

import { AnswerContext } from '../Context/AnswerContext'
import DetailsContext from '../../../../../Context/DetailsContext'

const Delete = React.lazy(() => import('../Includes/DeleteIcon'))
const DeleteDialog = React.lazy(() => import('../Includes/DeleteDialog'))

const AnswerDelete: React.FC<{ answerUserName: string; answerId: string; commentId: string }> = ({
   answerUserName,
   answerId,
   commentId,
}) => {
   const { productId, productType } = useContext(DetailsContext)
   const { setCommentAnswer } = useContext(AnswerContext)

   const [dialogAnswer, setDialogAnswer] = useState<boolean>(false)
   const [openDialog, setOpenDialog] = useState<boolean>(false)

   const handleAnswerDelete = useCallback(async () => {
      try {
         if (dialogAnswer) {
            const response = await axiosInstance.delete(`/${productType}/${productType}-answer-remove`, {
               data: { productId, answerId, commentId },
            })
            if (response.status === 200) {
               setCommentAnswer(response.data)
            }
         }
      } catch (error) {
         console.log(error)
      }
   }, [dialogAnswer, productId, productType, answerId, commentId, setCommentAnswer])

   const handleOpenDialog = () => {
      setOpenDialog(true)
   }

   useEffect(() => {
      handleAnswerDelete()
   }, [handleAnswerDelete, dialogAnswer])

   return (
      <>
         <Delete incomingUserName={answerUserName} handleDelete={handleOpenDialog} />
         <DeleteDialog
            openDialog={openDialog}
            setDialogAnswer={setDialogAnswer}
            setOpenDialog={setOpenDialog}
            toDeleteText='válaszodat'
         />
      </>
   )
}

export default AnswerDelete
