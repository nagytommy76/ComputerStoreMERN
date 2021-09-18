import React from 'react'
import { useLocation } from 'react-router'
import { LocationType } from '../../../BaseTypes'
import { RatingContainer } from './RatingStyle'

const Rating = () => {
   const location = useLocation<LocationType>()
   const { _id } = location.state
   return (
      <RatingContainer>
         <h1>Itt lehe értékelni {_id}</h1>
      </RatingContainer>
   )
}

export default Rating
