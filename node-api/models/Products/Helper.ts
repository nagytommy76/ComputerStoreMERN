const responses = {
   type: [
      {
         userId: { type: String, required: true },
         isLike: { type: Boolean, required: true }
      }
   ],
   required: false
}

export const ProductRatingValuesSchema = {
   type: [
      {
         userId: { type: String, required: true },
         userName: { type: String, required: true },
         rating: { type: Number, required: true },
         ratedAt: { type: Date, required: true },
         comment: { type: String, required: false },
         responses,
         commentAnswers: {
            type: [
               {
                  userId: { type: String, required: true },
                  userName: { type: String, required: true },
                  answer: { type: String, required: true },
                  answeredAt: { type: Date, required: true },
                  responses
               }
            ],
            required: false
         }
      }
   ],
   required: false
}
