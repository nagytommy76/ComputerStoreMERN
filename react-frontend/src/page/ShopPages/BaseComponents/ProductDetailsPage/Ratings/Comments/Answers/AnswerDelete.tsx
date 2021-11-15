import React, { useContext } from 'react'
import axios from 'axios'

import IconButton from '@mui/material/IconButton'
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep'
import Tooltip from '@mui/material/Tooltip'

import { useAppSelector } from '../../../../../../../app/hooks'
import { useLocation } from 'react-router'
import { LocationType } from '../../../../../BaseTypes'
import { AnswerContext } from '../Context/AnswerContext'

const AnswerDelete: React.FC<{ answerUserName: string; answerId: string; commentId: string }> = ({
   answerUserName,
   answerId,
   commentId
}) => {
   const {
      state: { _id, productType }
   } = useLocation<LocationType>()

   const { setCommentAnswer } = useContext(AnswerContext)

   const userLoggedIn = useAppSelector((state) => state.auth.userLoggedIn)
   const userName = useAppSelector((state) => state.auth.userName)

   const handleAnswerDelete = async () => {
      try {
         const response = await axios.delete(`/${productType}/${productType}-answer-remove`, {
            data: { productId: _id, answerId, commentId }
         })
         if (response.status === 200) {
            setCommentAnswer(response.data)
         }
      } catch (error) {
         console.log(error)
      }
   }

   return (
      <>
         {userLoggedIn && userName === answerUserName && (
            <Tooltip title='Válasz törlése' arrow placement='top'>
               <IconButton id='deleteAnswer' onClick={handleAnswerDelete} sx={{ height: '50%' }} size='medium'>
                  <DeleteSweepIcon color='primary' fontSize='small' />
               </IconButton>
            </Tooltip>
         )}
      </>
   )
}

export default AnswerDelete
