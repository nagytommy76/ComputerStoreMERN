import React, { useContext } from 'react'
import DetailsContext from '../../../Context/DetailsContext'
import { ChartSection } from '../DetailsStyle'

import { Area, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { useAppSelector } from '../../../../../app/hooks'

const CustomTooltip = React.lazy(() => import('./CustomTooltip'))

const Chart = () => {
   const {
      details: { chartData },
   } = useContext(DetailsContext)
   const isDarkTheme = useAppSelector(state => state.theme.isDarkTheme)
   return (
      <>
         {chartData && (
            <ChartSection>
               <ResponsiveContainer width='100%' height={300}>
                  <AreaChart data={chartData}>
                     <CartesianGrid strokeDasharray='0' />
                     <XAxis
                        tick={{ stroke: `${isDarkTheme ? '#FFF' : '#000'}`, strokeWidth: 1, fontSize: 16 }}
                        dataKey='timestamp'
                     />
                     <YAxis
                        tick={{ stroke: `${isDarkTheme ? '#FFF' : '#000'}`, strokeWidth: 1, fontSize: 14 }}
                        dataKey='price'
                        domain={['dataMin', 'dataMax']}
                     />
                     <Tooltip content={<CustomTooltip />} />
                     <Area
                        type='monotone'
                        dataKey='price'
                        stroke={`${isDarkTheme ? '#FFF' : '#000'}`}
                        fill='#ff8f00'
                     />
                  </AreaChart>
               </ResponsiveContainer>
            </ChartSection>
         )}
      </>
   )
}

export default Chart

// https://recharts.org/en-US/examples/CustomContentOfTooltip
