import React from 'react'

const AdvancedButton = React.lazy(() => import('../../../BaseElements/AdvancedButton/AdvancedButton'))

const Buttons: React.FC<{
   isSubmitBtnDisabled: boolean
   submitAdressForm: (event: React.MouseEvent) => void
   updateDetailsHandler: (event: React.MouseEvent) => Promise<void>
}> = ({ isSubmitBtnDisabled, submitAdressForm, updateDetailsHandler }) => {
   return (
      <>
         {!isSubmitBtnDisabled ? (
            <AdvancedButton isButtonDisabled={isSubmitBtnDisabled} onClickEvent={submitAdressForm}>
               Bevitel
            </AdvancedButton>
         ) : (
            <AdvancedButton onClickEvent={updateDetailsHandler}>Módosítás</AdvancedButton>
         )}
      </>
   )
}

export default Buttons
