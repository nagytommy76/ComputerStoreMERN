export type RateState = {
   _id: string
   rating: number
   comment?: string
   ratedAt: Date
   userName: string
   responses: ResponsesType[]
   commentAnswers: CommentAnswerType[]
}

export type CommentAnswerType = {
   _id: string
   userId: string
   userName: string
   answer: string
   answeredAt: Date
   responses?: ResponsesType[]
}

export type ResponsesType = { _id?: string; isLike: boolean; userId: string }

export const formatRatedAtToDateType = (ratingValues: RateState[]) => {
   return ratingValues.map((res: RateState) => {
      return {
         ...res,
         ratedAt: new Date(res.ratedAt)
      }
   })
}

export const formatDate = (date: Date) => {
   try {
      return date.toLocaleDateString('hu-HU', {
         year: 'numeric',
         month: '2-digit',
         day: '2-digit',
         hour: '2-digit',
         minute: '2-digit',
         second: '2-digit'
      })
   } catch (error) {
      return date
   }
}
