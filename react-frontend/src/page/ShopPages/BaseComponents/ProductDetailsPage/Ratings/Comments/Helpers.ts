export type RateState = {
   _id: string
   rating: number
   comment: string
   ratedAt: Date
   userName: string
   userId: string
   responses: ResponsesType[]
   commentAnswers: CommentAnswerType[]
}

export type CommentAnswerType = {
   _id: string
   userId: string
   userName: string
   answer: string
   answeredAt: Date
   commentDepth: number
   parentCommentId: string
   responses: ResponsesType[]
}

export type ResponsesType = { _id?: string; isLike: boolean; userId: string }

export const formatRatedAtToDateType = (ratingValues: RateState[]) => {
   return ratingValues.map((res: RateState) => {
      return {
         ...res,
         ratedAt: new Date(res.ratedAt),
      }
   })
}
