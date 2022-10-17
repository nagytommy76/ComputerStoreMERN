import React, { createContext, useMemo } from 'react'
import { CommentAnswerType } from '../Helpers'

export const AnswerContext = createContext<{
   rootAnswers: CommentAnswerType[]
   getReplies: (parentId: string) => CommentAnswerType[]
}>({
   rootAnswers: [],
   getReplies: () => [],
})

export const CommentAnswerProvider: React.FC<{
   children: React.ReactNode
   commentAnswersProp: CommentAnswerType[]
}> = ({ children, commentAnswersProp }) => {
   const commentsByParentId = useMemo(() => {
      const group: any = {}
      commentAnswersProp.forEach(answer => {
         group[answer.parentCommentId] ||= []
         group[answer.parentCommentId].push(answer)
      })
      return group
   }, [commentAnswersProp])

   function getReplies(parentId: string) {
      return commentsByParentId[parentId]
   }

   return (
      <AnswerContext.Provider
         value={{
            rootAnswers: commentsByParentId['null'],
            getReplies,
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
