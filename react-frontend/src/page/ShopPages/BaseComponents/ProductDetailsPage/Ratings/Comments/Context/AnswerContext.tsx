import React, { createContext, useState, useEffect, useMemo, Dispatch, SetStateAction } from 'react'
import { CommentAnswerType } from '../Helpers'

export const AnswerContext = createContext<{
   commentAnswers: CommentAnswerType[]
   setCommentAnswer: Dispatch<SetStateAction<CommentAnswerType[]>>
   rootAnswers: CommentAnswerType[]
   getReplies: (parentId: string) => CommentAnswerType[]
}>({
   commentAnswers: [],
   setCommentAnswer: () => {},
   rootAnswers: [],
   getReplies: () => [],
})

export const CommentAnswerProvider: React.FC<{
   children: React.ReactNode
   commentAnswersProp: CommentAnswerType[]
}> = ({ children, commentAnswersProp }) => {
   const [commentAnswers, setCommentAnswers] = useState<CommentAnswerType[]>([])

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

   useEffect(() => {
      setCommentAnswers(commentAnswersProp)
   }, [commentsByParentId, commentAnswersProp])

   return (
      <AnswerContext.Provider
         value={{
            commentAnswers,
            setCommentAnswer: setCommentAnswers,
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
 *  - a useState nem fog kelleni: [commentAnswers, setCommentAnswers]
 * rootComments kéne
 * majd replies
 */
