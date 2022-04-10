import React from 'react'

import { Area, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const testData = [
   {
      name: '2022.03.10',
      price: 225600,
   },
   {
      name: '2022.03.15',
      price: 220000,
   },
   {
      name: '2022.03.24',
      price: 193258,
   },
   {
      name: '2022.03.31',
      price: 212555,
   },
   {
      name: '2022.04.07',
      price: 213587,
   },
   {
      name: '2022.04.10',
      price: 210000,
   },
   {
      name: '2022.04.15',
      price: 210000,
   },
]

const Chart = () => {
   return (
      <ResponsiveContainer width='100%' height={275}>
         <AreaChart data={testData}>
            <CartesianGrid strokeDasharray='0 0' />
            <XAxis dataKey='name' />
            <YAxis domain={['dataMin', 'dataMax']} />
            <Tooltip />
            <Area type='monotone' dataKey='price' stroke='#000000' fill='#ff8f00' />
         </AreaChart>
      </ResponsiveContainer>
   )
}

export default Chart

// https://recharts.org/en-US/examples/CustomContentOfTooltip
