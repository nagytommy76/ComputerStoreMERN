import axios from 'axios'
import React, { useEffect } from 'react'
import { useLocation } from 'react-router'
import { LocationType } from '../../../../BaseTypes'
import { SummaryContainer } from './StyleSummary'

const Summary = () => {
   const {
      state: { _id }
   } = useLocation<LocationType>()
   useEffect(() => {
      axios.get('/cpu/get-cpu-rates', { params: { _id } }).then((result) => {
         console.log(result)
      })
   }, [])
   return (
      <SummaryContainer>
         <h1>Ide jön egy disabled Rating, hogy mutassa a csillagokat .5 tizedesig</h1>
      </SummaryContainer>
   )
}

export default Summary
