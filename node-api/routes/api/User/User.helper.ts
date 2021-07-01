import { UserTypes } from '../../../models/User/UserTypes'
import jwt, { JwtPayload } from 'jsonwebtoken'
/**
 *
 * @param user UserTypes
 * @param TOKEN_SECRET string
 * @param expiresIn string
 * @returns an accessToken or refreshToken with the passed in user's data
 */
export const generateTokens = (user: UserTypes, TOKEN_SECRET: string, expiresIn: string = '15min') => {
   return jwt.sign(user, TOKEN_SECRET, { expiresIn })
}
