import { createContext } from 'react'

interface IMessage {
   severity: 'error' | 'success' | 'info' | 'warning'
}
const initialValue: IMessage = {
   severity: 'success',
}

export const MessageContext = createContext<IMessage>(initialValue)

const MessageContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
   return <MessageContext.Provider value={initialValue}>{children}</MessageContext.Provider>
}

export default MessageContextProvider
