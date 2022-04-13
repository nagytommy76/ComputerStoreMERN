import React from 'react'
import NumberFormat from 'react-number-format'
import { useAppSelector } from '../../../../../app/hooks'

import { ChartContainer } from './Styles'

const CustomTooltip: React.FC<CustomTooltipProps | any> = ({ active, payload, label }) => {
   const isDarkTheme = useAppSelector(state => state.theme.isDarkTheme)
   if (active && payload && payload.length) {
      return (
         <ChartContainer isDarkTheme={isDarkTheme}>
            <p>{label}</p>
            <p>
               Ár:{' '}
               <NumberFormat
                  value={payload[0].payload.price}
                  suffix=' Ft'
                  displayType='text'
                  thousandSeparator=' '
               />
            </p>
         </ChartContainer>
      )
   }
   return null
}

type CustomTooltipProps = {
   active: boolean
   label: string
   payload: {
      payload: {
         price: number
         timestamp: string
      }
   }[]
}

export default CustomTooltip
