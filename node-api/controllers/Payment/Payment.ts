import { Request, Response } from 'express'

export const handleCardPaymentController = (req: Request, res: Response) => {
   return res.status(200).json({ msg: 'siker' })
}
