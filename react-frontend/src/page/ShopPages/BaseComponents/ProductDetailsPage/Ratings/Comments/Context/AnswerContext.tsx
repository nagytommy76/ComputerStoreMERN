import React, { createContext, useState, useEffect, useMemo, Dispatch, SetStateAction } from 'react'
import { CommentAnswerType } from '../Helpers'

export const AnswerContext = createContext<{
   commentAnswers: CommentAnswerType[]
   setCommentAnswer: Dispatch<SetStateAction<CommentAnswerType[]>>
   // CommentId-t hozzáadni
}>({
   commentAnswers: [],
   setCommentAnswer: () => {},
})

export const CommentAnswerProvider: React.FC<{
   children: React.ReactNode
   commentAnswersProp: CommentAnswerType[]
}> = ({ children, commentAnswersProp }) => {
   const [commentAnswers, setCommentAnswers] = useState<CommentAnswerType[]>([])
   useEffect(() => {
      setCommentAnswers(commentAnswersProp)
   }, [commentAnswersProp])

   const commentsByParentId = useMemo(() => {
      const group: any = {}
      commentAnswersProp.forEach(answer => {
         if (answer.parentCommentId !== null) {
            group[answer.parentCommentId] ||= []
            group[answer.parentCommentId].push(answer)
         }
      })
      return group
   }, [commentAnswersProp])
   // useEffect(() => {
   //    console.log(commentsByParentId)
   // }, [commentsByParentId])

   return (
      <AnswerContext.Provider
         value={{
            commentAnswers,
            setCommentAnswer: setCommentAnswers,
         }}
      >
         {children}
      </AnswerContext.Provider>
   )
}
/**
 * Tennivalók:
 *  - A group-nak valami type-ot csinálni
 *  - a commentAnswers majd a commentsByParentId function visszatérési értéke lesz (group)
 *  - a useState nem fog kelleni: [commentAnswers, setCommentAnswers]
 */
