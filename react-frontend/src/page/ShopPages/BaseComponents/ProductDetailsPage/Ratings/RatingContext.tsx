import React, { createContext } from 'react'

export const RatingContext = createContext<{
   commentRequestSend: boolean
   setCommentRequestSend: React.Dispatch<React.SetStateAction<boolean>>
}>({
   commentRequestSend: false,
   setCommentRequestSend: () => {}
})
