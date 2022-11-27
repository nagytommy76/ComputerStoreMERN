import { createContext, useReducer } from 'react'

export enum MessageTypes {
   SET_ISACTIVE = 'SET_ISACTIVE',
   INIT = 'INIT',
}

interface IMessage {
   isActive: boolean
   severity: 'error' | 'success' | 'info' | 'warning'
   message: string
}

interface MessageAction {
   type: MessageTypes
   payload: IMessage
}

const messageReducer = (state: IMessage, action: MessageAction): IMessage => {
   const { type, payload } = action
   switch (type) {
      case MessageTypes.SET_ISACTIVE:
         return {
            severity: payload.severity,
            message: payload.message,
            isActive: payload.isActive,
         }
      case MessageTypes.INIT:
         return {
            message: '',
            severity: 'success',
            isActive: false,
         }
      default:
         return state
   }
}

type MessageContextType = {
   state: IMessage
   dispatch: React.Dispatch<MessageAction>
}
// ez egy state legyen
const initialValue: IMessage = {
   isActive: false,
   severity: 'success',
   message: '',
}

export const MessageContext = createContext<MessageContextType>({ state: initialValue, dispatch: () => null })

const MessageContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
   const [state, dispatch] = useReducer(messageReducer, initialValue)

   return <MessageContext.Provider value={{ state, dispatch }}>{children}</MessageContext.Provider>
}

export default MessageContextProvider
