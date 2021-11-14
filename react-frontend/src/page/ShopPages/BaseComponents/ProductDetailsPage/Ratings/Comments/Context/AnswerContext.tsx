import { createContext } from 'react'
import { CommentAnswerType } from '../Helpers'

export const AnswerContext = createContext<{
   commentAnswers: CommentAnswerType[]
   setCommentAnswer: React.Dispatch<React.SetStateAction<CommentAnswerType[]>>
   // CommentId-t hozzáadni
}>({
   commentAnswers: [],
   setCommentAnswer: () => {}
})
