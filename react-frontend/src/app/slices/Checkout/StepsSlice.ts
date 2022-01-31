import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit'
import { RootState } from '../../store'

type Props = {
   currentStep: number
   isNextBtnDisabled: boolean
}

const initialState: Props = {
   currentStep: 0,
   isNextBtnDisabled: false
}

const StepsSlice = createSlice({
   name: 'steps',
   initialState,
   reducers: {
      setCurrentStep: (state, { payload }: PayloadAction<number>) => {
         state.currentStep = payload
      },
      setIsNextBtnDisabled: (state, { payload }: PayloadAction<boolean>) => {
         state.isNextBtnDisabled = payload
      },
      setToDefaultStepsAfterOrder: (state) => {
         state.currentStep = 0
         state.isNextBtnDisabled = false
      },
   },
})

export const { setIsNextBtnDisabled, setCurrentStep, setToDefaultStepsAfterOrder } = StepsSlice.actions

export default StepsSlice.reducer

export const handleNextButtonDisabled = () => (dispatch: Dispatch, getState: any) => {
   const state = getState() as RootState

   if (!state.userDetails.isDetailsFilled) dispatch(setIsNextBtnDisabled(true))
   else dispatch(setIsNextBtnDisabled(false))
   state.steps.currentStep === 3 && dispatch(setIsNextBtnDisabled(true))
}
