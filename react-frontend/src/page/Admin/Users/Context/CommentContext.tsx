import { createContext, ReactNode, useState } from 'react'

import { SnackbarStateTypes } from '../../Components/DeleteComponents/Types'
import { UserTypes } from '../UserTypes'

export enum NavLabels {
   Processor = 'cpu',
   Vga = 'vga',
   Memory = 'memory',
   HDD = 'hdd',
   SSD = 'ssd',
}

export const CommentContext = createContext<CommentsContextType>({
   users: [],
   usersLength: 0,
   setUsers: () => {},
   selectedUserIdAndName: { userID: null, userName: '' },
   setSelectedUserIdAndName: () => {},
   isModalOpen: false,
   setIsModalOpen: () => {},
   isSnackOpen: { isOpen: false, deletedProductName: '' },
   setIsSnackOpen: () => {},
   navLabelsValue: NavLabels.Processor,
   setNavLabelsValue: () => {},
})

export const CommentContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
   const [navLabelsValue, setNavLabelsValue] = useState<NavLabels>(NavLabels.Processor)
   const [users, setUsers] = useState<UserTypes[]>([])
   const [selectedUserIdAndName, setSelectedUserIdAndName] = useState<{
      userID: string | null
      userName: string
   }>({ userID: null, userName: '' })
   const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
   const [isSnackOpen, setIsSnackOpen] = useState<SnackbarStateTypes>({
      isOpen: false,
      deletedProductName: '',
   })

   return (
      <CommentContext.Provider
         value={{
            users,
            usersLength: users.length,
            setUsers,
            selectedUserIdAndName,
            setSelectedUserIdAndName,
            isModalOpen,
            setIsModalOpen,
            isSnackOpen,
            setIsSnackOpen,
            navLabelsValue,
            setNavLabelsValue,
         }}
      >
         {children}
      </CommentContext.Provider>
   )
}

export type CommentsContextType = {
   users: UserTypes[]
   usersLength: number
   setUsers: React.Dispatch<React.SetStateAction<UserTypes[]>>
   selectedUserIdAndName: {
      userID: string | null
      userName: string
   }
   setSelectedUserIdAndName: React.Dispatch<
      React.SetStateAction<{
         userID: string | null
         userName: string
      }>
   >
   isModalOpen: boolean
   setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
   isSnackOpen: SnackbarStateTypes
   setIsSnackOpen: React.Dispatch<React.SetStateAction<SnackbarStateTypes>>
   navLabelsValue: NavLabels
   setNavLabelsValue: React.Dispatch<React.SetStateAction<NavLabels>>
}

// https://www.youtube.com/watch?v=NKsVV7wJcDM&t=178s&ab_channel=TheNetNinja
