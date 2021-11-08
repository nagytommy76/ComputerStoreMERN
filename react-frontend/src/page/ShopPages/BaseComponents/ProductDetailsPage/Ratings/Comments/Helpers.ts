export type RateState = {
   _id: string
   rating: number
   comment?: string
   ratedAt: Date
   userName: string
   responses: { _id?: string; isLike: boolean; userId: string }[]
}

export const formatRatedAtToDateType = (ratingValues: RateState[]) => {
   return ratingValues.map((res: RateState) => {
      return {
         ...res,
         ratedAt: new Date(res.ratedAt)
      }
   })
}
