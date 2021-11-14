export type RateState = {
   _id: string
   rating: number
   comment?: string
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

// Format date

const returnFormattedDate = (date: Date) => {
   return date.toLocaleDateString('hu-HU', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
   })
}

export const formatDate = (date: Date) => {
   try {
      return returnFormattedDate(date)
   } catch (error) {
      const convertedDate = new Date(date)
      return returnFormattedDate(convertedDate)
   }
}
