import { createContext, ReactNode } from 'react'
import { UserTypes } from '../UserTypes'

export const CommentContext = createContext<CommentsContextType>({
   users: [],
   setUsers: () => {},
})

export const CommentContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
   return (
      <CommentContext.Provider
         value={{
            users: [],
            setUsers: () => {},
         }}
      >
         {children}
      </CommentContext.Provider>
   )
}

export type CommentsContextType = {
   users: UserTypes[]
   setUsers: React.Dispatch<React.SetStateAction<UserTypes[]>>
}

// https://www.youtube.com/watch?v=NKsVV7wJcDM&t=178s&ab_channel=TheNetNinja
