import React, { createContext, useEffect, useMemo, useState } from 'react'
import { CommentAnswerType } from '../Helpers'

export const AnswerContext = createContext<{
   commentId: string
   rootAnswers: CommentAnswerType[]
   getReplies: (parentId: string) => CommentAnswerType[]
   setCommentAnswers: React.Dispatch<React.SetStateAction<CommentAnswerType[]>>
   createLocalAnswer(newIncomingAnswers: CommentAnswerType[]): void
   deleteAnswer: (id: string) => void
}>({
   commentId: '',
   rootAnswers: [],
   getReplies: () => [],
   setCommentAnswers: () => {},
   deleteAnswer() {},
   createLocalAnswer() {},
})

export const CommentAnswerProvider: React.FC<{
   commentId: string
   children: React.ReactNode
   commentAnswersProp: CommentAnswerType[]
}> = ({ commentId, children, commentAnswersProp }) => {
   const [commentAnswers, setCommentAnswers] = useState<CommentAnswerType[]>([])

   const commentsByParentId = useMemo(() => {
      const group: any = {}
      commentAnswers.forEach(answer => {
         group[answer.parentCommentId] ||= []
         group[answer.parentCommentId].push(answer)
      })
      return group
   }, [commentAnswers])

   useEffect(() => {
      setCommentAnswers(commentAnswersProp)
   }, [setCommentAnswers, commentAnswersProp])

   function createLocalAnswer(newIncomingAnswers: CommentAnswerType[]) {
      setCommentAnswers(newIncomingAnswers)
   }

   function deleteAnswer(id: string) {
      setCommentAnswers(prevAnswers => {
         return prevAnswers.filter(answers => answers._id !== id)
      })
   }

   function getReplies(parentId: string) {
      return commentsByParentId[parentId]
   }

   return (
      <AnswerContext.Provider
         value={{
            commentId,
            rootAnswers: commentsByParentId['null'],
            getReplies,
            setCommentAnswers,
            deleteAnswer,
            createLocalAnswer,
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
 *  - MEG KÉNE OLDANI, HOGY FRISSÜLJÖN A LISTA TÖRLÉSNÉL ÉS BEVITELNÉL
 */
