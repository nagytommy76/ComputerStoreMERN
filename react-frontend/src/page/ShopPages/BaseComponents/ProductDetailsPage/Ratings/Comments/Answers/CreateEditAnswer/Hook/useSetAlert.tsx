import React, { useState } from 'react'

const useSetAlert = (setIsCreateAnswerOpen: (value: React.SetStateAction<boolean>) => void) => {
   const [isAlert, setIsAlert] = useState<AlertInterface>({
      isAlertActive: false,
      message: '',
      severity: 'success',
   })

   const closeAlert = () => {
      setIsAlert({
         isAlertActive: false,
         message: '',
         severity: 'success',
      })
   }

   const setAlertAndTimeout = (
      isAlertActive: boolean,
      message: string,
      severity: Severity,
      timeout: number | undefined = 6000
   ) => {
      setIsAlert({ isAlertActive, message, severity })
      setTimeout(() => {
         closeAlert()
         setIsCreateAnswerOpen(false)
      }, timeout)
   }
   return { setAlertAndTimeout, closeAlert, isAlert }
}

export default useSetAlert

type Severity = 'success' | 'info' | 'warning' | 'error' | undefined
export interface AlertInterface {
   severity: Severity
   isAlertActive: boolean
   message: string
}
